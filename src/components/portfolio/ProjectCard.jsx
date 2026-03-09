import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect } from "react";

const ProjectCard = ({ data }) => {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  // تشغيل الفيديو عند ظهور popup
  useEffect(() => {
    if (showVideo && videoRef.current) {
      videoRef.current
        .play()
        .catch(() => {
          console.log("Autoplay prevented by browser, needs user interaction");
        });
    }
  }, [showVideo]);

  return (
    <div className="w-full h-full flex flex-col rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl duration-300 transition-all dark:bg-gray-800">
      {/* media section */}
      <div className="relative group cursor-pointer">
        {/* Thumbnail */}
        <img
          src={data?.image}
          alt={data?.title}
          loading="lazy"
          className={`w-full block transition-transform duration-500 ${
            showVideo ? "scale-90 opacity-50" : ""
          }`}
          onClick={() => setShowVideo(true)}
        />

        {/* Play Icon */}
        {!showVideo && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <FontAwesomeIcon
              icon={faPlay}
              className="text-white text-3xl bg-black/60 p-4 rounded-full"
            />
          </div>
        )}

        {/* Video Popup */}
        {showVideo && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
            <video
              ref={videoRef}
              src={data?.video}
              muted
              autoPlay
              playsInline
              controls
              className="w-[90%] h-[90%] object-cover rounded-lg shadow-lg"
            />
            {/* Close Button */}
            <button
              className="absolute top-5 right-5 text-white text-2xl font-bold"
              onClick={() => setShowVideo(false)}
            >
              ✕
            </button>
          </div>
        )}
      </div>

      {/* text section */}
      <div className="p-4 xs:p-8 flex flex-col flex-1">
        <p className="text-gray-600 dark:text-gray-300 text-xs font-medium">{data?.category}</p>

        <p className="text-gray-900 dark:text-white text-md xxs:text-lg font-semibold pt-1 mb-3">
          {data?.title}
        </p>

        <p className="text-gray-600 dark:text-gray-300 text-xs xxs:text-[14px] leading-5 flex-1">
          {data?.description}
        </p>

        <a
          href={data?.link}
          className="btn hover:border-picto-primary hover:text-picto-primary bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600 text-sm xs:text-[16px] font-semibold hover:gap-3 xs:hover:gap-4 transition-all duration-300 mt-5 xs:py-5.75 px-6 max-sm:w-full"
        >
          <FontAwesomeIcon icon={faGithub} className="ms-1 xs:ms-3" />
          View Source Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
import { useState } from "react";

const Roles = ({ role }) => {
  const [mouseHover, setMouseHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setMouseHover(true)}
      onMouseLeave={() => setMouseHover(false)}
      className="p-4 xs:p-8 bg-white dark:bg-gray-800 hover:shadow-xl h-auto shadow-gray-300 ease-out duration-800 rounded-lg my-6 flex relative overflow-hidden"
    >
      <p
        className={`bg-picto-primary absolute start-0 w-0 h-full mt-[-16px] xs:mt-[-32px] ${
          mouseHover && "duration-200 w-[5px]"
        }`}
      />
      <div>
        <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white pb-4">
          {role?.title}
        </p>
        <p className="text-[14px] sm:text-[17px] font-normal text-gray-700 dark:text-gray-300">
          {role?.description}
        </p>
      </div>
    </div>
  );
};

export default Roles;

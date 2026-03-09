import img1 from "../../assets/images/blog/blog-1.png";
import img2 from "../../assets/images/blog/blog-2.jpeg";
import img3 from "../../assets/images/blog/blog-3.png";
import img4 from "../../assets/images/blog/blog-4.png";
import img5 from "../../assets/images/blog/blog-5.png";
import img6 from "../../assets/images/blog/blog-6.png";
import img7 from "../../assets/images/blog/blog-7.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import CertificateCard from "./CertificateCard";
import "swiper/css";
import "swiper/css/pagination";
import "./certificates.css";

// Breakpoints for swiperJS
const custom_breakpoints = {
    640: {
        slidesPerView: 2,
        spaceBetween: 15,
    },
    768: {
        slidesPerView: 3,
        spaceBetween: 15,
    },
    1220: {
        slidesPerView: 4,
        spaceBetween: 24,
    },
};

const certificatesData = [
    {
        id: 1,
        image: img1,
        date: "1 April, 2024",
        comments: "Backend Development .NET",
        title: "Software Engineer Diploma",
        link: "#!",
    },
    {
        id: 2,
        image: img2,
        date: "22 Oct, 2024",
        comments: "Officially certified in Business English proficiency",
        title: "Business English Certificate",
        link: "#!",
    },
    {
        id: 3,
        image: img3,
        date: "2 June, 2025",
        comments: "Version Control",
        title: "Git and GitHub Certificate",
        link: "#!",
    },
    {
        id: 4,
        image: img4,
        date: "12 Oct, 2024",
        comments: "Web Development",
        title: "Technical Support Certificate",
        link: "#!",
    },
    {
        id: 5,
        image: img5,
        date: "23 Aug, 2022",
        comments: "Problem Solving",
        title: "Competitive Programming Achievement",
        link: "#!",
    },
    {
        id: 6,
        image: img6,
        date: "15 Aug, 2023",
        comments: "Problem Solving",
        title: "Competitive Programming Achievement",
        link: "#!",
    },
    {
        id: 7,
        image: img7,
        date: "23 Aug, 2022",
        comments: "First to Solve",
        title: "Competitive Programming Achievement",
        link: "#!",
    },
];

const Certificates = () => {
    return (
        <div className="content py-25 px-2 relative dark:bg-gray-900" id="blog">
            <div className="max-w-135 text-center mx-auto pb-17.5">
                <p className="section-title pb-6 dark:text-white">Certificates</p>
                <p className="text-xs xs:text-[16px] md:text-lg text-gray-400">
                    Explore my professional certifications that reflect my continuous learning journey and commitment to mastering modern technologies, backend development, database design, and full-stack engineering practices.
                </p>
            </div>
            <Swiper
                grabCursor={true}
                breakpoints={custom_breakpoints}
                pagination={{ clickable: true }}
                modules={[Pagination]}
            >
                {certificatesData?.map((data, index) => (
                    <SwiperSlide
                        key={index}
                        className="mb-10" /* pagination margin bottom to 40px */
                        style={{ backgroundColor: "rgba(0,0,0,0)" }}
                    >
                        <CertificateCard data={data} key={index} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Certificates;

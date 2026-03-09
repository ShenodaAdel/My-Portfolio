import ProjectCard from "./ProjectCard";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
const projectData = [
  {
    id: 1,
    image: card1,
    video: `${import.meta.env.BASE_URL}videos/hospital.mp4`,
    category: "WEB APPLICATION",
    title: "🏥 Hospital Management System",
    description:
      "A web-based Hospital Management System built with ASP.NET MVC to help manage hospital operations such as patient records, appointments, staff management, and billing in an organized and efficient way.The system provides a simple interface for managing hospital data while ensuring secure access for staff and administrators.",
    link: "https://github.com/ShenodaAdel/Hospitl_Mangement_MVC",
  },
  {
    id: 2,
    image: card2,
    video: `${import.meta.env.BASE_URL}videos/Personal Profiling.mp4`,
    category: "WEB APPLICATION",
    title: "🧠 Personal Profiling & Assistance Platform",
    description:
      "A web-based platform designed to help users assess their personality, mental health, and communication skills through intelligent tests.The system provides AI-powered insights using voice and facial expression analysis, along with personalized recommendations based on test results.Built using .NET 8, Angular, and SQL Server, the platform also allows users to track their results over time and find nearby clinics if professional help is needed.",
    link: "https://github.com/ShenodaAdel/personal-profiling-and-assistance-api",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content px-2 max-xxl:px-4 py-10 md:py-25 dark:bg-gray-900"
      id="portfolio"
    >
      <div className="text-center mb-10 md:mb-17.5">
        <div className="max-sm:px-2 mx-auto max-w-144.25">
          <p className="section-title dark:text-white">Projects</p>
          <p className="font-normal text-[20px] max-sm:text-[15px] pt-6 text-gray-600 dark:text-gray-300">
            A collection of my recent projects built with .NET and modern web
            technologies, focusing on scalable backend systems and clean
            architecture.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
        {projectData.map((data, index) => (
          <ProjectCard data={data} key={index} />
        ))}
      </div>

      <div className="text-center mt-12.5">
        <a
          href="https://github.com/ShenodaAdel"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary py-3 px-6 text-[16px] font-semibold"
        >
          More Projects
        </a>
      </div>
    </div>
  );
};

export default Portfolio;

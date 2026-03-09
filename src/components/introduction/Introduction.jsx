import person from "../../assets/images/PersonShenoda.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "Experience",
    description: "2Y",
  },
  {
    id: 2,
    title: "Projects Completed",
    description: "10",
  },
  {
    id: 3,
    title: "Happy Clients",
    description: "10",
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 lg:me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-4xl xxs:text-5xl sm:max-xl:text-6xl xl:text-7xl font-bold w-full dark:text-white">
            Hello, I’m
            <span className="text-nowrap shrink-0 inline-block w-full">
              Shenoda Adel
            </span>
          </p>
          <p
            className="text-sm xxs:text-xl lg:text-[20px] my-6 text-gray-700 dark:text-gray-300"
            spellCheck={false}
          >
            I am a backend developer specializing in Microsoft technologies and
            web APIs. I build scalable, secure, and high-performance web
            applications using clean architecture and optimized database design.
          </p>
          <p className="text-center lg:text-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href="mailto:shenodaadel63@gmail.com"
            >
              Say Hello!
            </a>
          </p>
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
      >
        <img
          className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
          src={person}
          alt="person"
        />
      </div>
    </div>
  );
};

export default Introduction;

import Roles from "./Roles";

const rolesData = [
    {
        id: 1,
        title: "Backend Development",
        description:
            "I build robust server-side applications, create RESTful APIs, and implement secure authentication systems.I focus on performance, scalability, clean architecture, and maintainable code.",
    },
    {
        id: 2,
        title: "Database Design",
        description:
            "I design and optimize relational and non-relational databases, ensuring data integrity, efficiency, and high availability.From schema design to performance tuning, I handle the full database lifecycle.",
    },
    {
        id: 3,
        title: "Full-Stack Development",
        description:
            "I collaborate with my team to deliver complete full- stack solutions, integrating frontend and backend seamlessly.Whether working on freelance projects or team - based systems, I ensure smooth user experiences and reliable backend performance.",
    },
];

const Profession = () => {
    return (
        <div
            className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5 dark:bg-gray-900"
            id="services"
        >
            <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
                <p className="section-title max-md:text-center dark:text-white">What I do?</p>
                <div className="mt-6 text-[14px]">
                    <p className="text-sm sm:text-xl font-normal text-gray-600 dark:text-gray-300 mb-4">
                        I specialize in building scalable and secure backend systems, designing efficient databases, and developing full-stack web applications that deliver real business value.
                    </p>
                    <p className="text-sm sm:text-xl font-normal text-gray-600 dark:text-gray-300">
                        I work collaboratively with my team on freelance projects, contributing to backend architecture, database design, and complete end-to-end solutions from development to deployment.
                    </p>
                </div>
               
            </div>
            <div className="">
                {rolesData.map((role, index) => (
                    <Roles role={role} key={index} />
                ))}
            </div>
        </div>
    );
};

export default Profession;

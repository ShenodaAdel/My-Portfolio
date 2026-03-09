import person from "../../assets/images/PersonShenoda.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";
import { Link as ScrollLink } from "react-scroll";

const Profile = () => {
    return (
        <div
            className={`relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white dark:bg-gray-800 drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4`}
            id="profile"
        >
            <div className="flex max-md:flex-col justify-between items-center gap-6">
                {/* Profile image */}
                <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126">
                    <div className="p-[5px] rounded-xl bg-gradient-to-b from-picto-primary to-purple-200">
                        <div className="max-w-106 h-auto max-h-117 object-fill overflow-hidden rounded-xl">
                            <img
                                className="bg-soft-white h-[120%] object-cover"
                                src={person}
                                alt=""
                            />
                        </div>
                    </div>
                    {/* Social media section */}
                    <div className="relative bottom-9">
                        <div className="flex justify-center">
                            <div className="px-6 max-w-66 py-3 z-50 text-center bg-white rounded-[4px] center shadow-2xl drop-shadow-2xl shadow-white">
                                <SocialMedia />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-sm:w-full w-[33rem]">
                    <h2
                        className={`text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] text-[min(24px,38px)] max-md:text-center font-semibold mb-8 dark:text-white`}
                    >
                        I am Professional Back-End .NET Developer
                    </h2>
                    <div
                        className={`text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600 dark:text-gray-300`}
                    >
                        <p className={``}>
                            I design and develop scalable, secure, and high-performance web applications using .NET technologies.
                            Specialized in building RESTful APIs, database architecture, and clean backend systems that power modern digital products.
                        </p>
                        <p className="mt-3">
                            My passion is writing clean, maintainable code and delivering reliable solutions.
                        </p>
                    </div>
                    <div className="mt-8 flex max-md:justify-center">
                        <ScrollLink
                            to="portfolio"   // نفس الـid في الصفحة
                            smooth={true}
                            duration={1000}
                            offset={-140}
                            className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 btn-primary text-xs xxs:text-[14px] sm:text-[16px]"
                        >
                            My Projects
                        </ScrollLink>
                        <a
                            className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 hover:border-picto-primary bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600 duration-300 transition-all hover:text-picto-primary ms-4 text-xs xxs:text-[14px] sm:text-[16px]"
                            href="/picto/Shenoda_Adel_CV.pdf"
                            download
                        >
                            <FontAwesomeIcon icon={faDownload} /> Download CV
                        </a>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;

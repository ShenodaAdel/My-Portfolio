import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link as ScrollLink } from "react-scroll";
const WorkTogether = () => {
    return (
        <div className="py-25 max-w-169 mx-auto px-2">
            <div className="text-center">
                <p className="text-white md:font-bold text-3xl sm:text-4xl md:text-6xl pb-8">
                    Do you have a Project Idea? Let's discuss your project!
                </p>
                <p className="text-[#A5ACB5] text-sm sm:text-xl font-normal text-center pb-8">
                    I'm always open to discussing new projects and creative ideas. Let's
                    connect and build something amazing together.
                </p>
                <ScrollLink
                    to="contact"   // نفس الـid في الصفحة
                    smooth={true}
                    duration={1000}
                    offset={-140}
                    className="btn btn-primary px-4 md:px-6.5 py-3 md:py-6 text-[12px] md:text-[16px]"
                >
                    Let's work Together
                    <FontAwesomeIcon
                        icon={faArrowRight}
                        size="l"
                        style={{ color: "#FFFFFF" }}
                        className="ms-3"
                    />
                </ScrollLink>

            </div>
        </div>
    );
};

export default WorkTogether;

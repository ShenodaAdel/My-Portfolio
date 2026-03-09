import {
    faEnvelope,
    faLocationDot,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Address from "./Address";
import Form from "./Form";
import SocialMedia from "../common/socialMedia/SocialMedia";

const addressData = [
    {
        icon: faLocationDot,
        title: "Address",
        description: "Cairo Egypt",
    },
    {
        icon: faEnvelope,
        title: "My Email",
        description: "shenodaadel63@gmail.com",
    },
    {
        icon: faPhone,
        title: "Call Me Now",
        description: "01092064015",
    },
];

const Contact = () => {
    return (
        <div className="relative -bottom-15 -mt-15 z-10 px-2">
            <div
                className="content p-4 md:p-10 lg:p-22 bg-white dark:bg-gray-800 rounded-2xl shadow-[0px_0px_90px_9px_rgba(0,_0,_0,_0.1)]"
                id="contact"
            >
                <div className="flex flex-col-reverse lg:gap-5 xl:gap-25.75 lg:flex-row justify-between">
                    <div>
                        <div>
                            <p className="text-[42px] max-lg:hidden font-bold text-nowrap text-[#132238] dark:text-white">
                                Let’s discuss your Project
                            </p>
                            <p className="text-[13px] xs:text-[15px] sm:text-xl md:text-xl max-lg:text-center pt-4 font-normal text-soft-dark">
                                Drop me a line if you have a
                                project you think I'd be a good fit for.
                            </p>
                        </div>
                        <div className="my-8.75 sm:max-lg:flex justify-between items-center">
                            {addressData.map((item, index) => (
                                <Address item={item} key={index} />
                            ))}
                        </div>
                        <div className="w-full max-lg:text-center max-md:mb-4">
                            <SocialMedia />
                        </div>
                    </div>
                    <div className="w-full py-6.5">
                        <p className="text-2xl mb-2 xs:text-3xl sm:text-3xl md:text-[44px] font-bold text-[#132238] dark:text-white lg:hidden text-center">
                            Let’s discuss your Project
                        </p>
                        <Form />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;

import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import WorkProcess from "../components/workProcess/WorkProcess";
import Portfolio from "../components/portfolio/Portfolio";
import WorkTogether from "../components/workTogether/WorkTogether";
import Certificates from "../components/certificates/Certificates";
import Profession from "../components/profession/Profession";
import Contact from "../components/contact/Contact";

const Home = () => {
  return (
    <div className="relative">
      <div className="introduction-profile-background">
        <div className="content">
          <Introduction />
          <Profile />
        </div>
      </div>
      <div className="bg-soft-white dark:bg-gray-900 pt-30">
        <WorkProcess />
      </div>
      <Portfolio />
      <div className="bg-gray-900">
        <WorkTogether />
      </div>
      <div className="blog-background">
        <Certificates />
      </div>
      <div className="bg-soft-white dark:bg-gray-900 me">
        <Profession />
      </div>
      {/* <HappyClients /> */}
      {/* <Testimonial /> */}
      <Contact />
    </div>
  );
};

export default Home;

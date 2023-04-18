import Navbar from "@/components/Navbar";
import ProfileCard from "@/components/ProfileCard";
import Skills from "@/components/Skills";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="aboutWrapper">
        <div className="boxWrapper">
          <ProfileCard />
        </div>
        <div className="boxWrapper">
          <Skills />
        </div>
      </div>
    </>
  );
};

export default About;

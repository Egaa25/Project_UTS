import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Tutors from "../components/Tutors";
import Partners from "../components/Partners";
import Contact from "../components/Contact";

import parse from "html-react-parser";

import { homeSection } from "../data/homeSection";
import { coursesSection } from "../data/coursesSection";
import { tutorsSection, tutorsList } from "../data/tutorsSection";
import { partnerSection, partnerList } from "../data/partnerSection";
import { contactSection } from "../data/contactSection";

import "../styles/Home.css";
function Home() {
  return (
    <>
      <Navbar />
      {/* Hero */}
      <div className="wrapper">
        <section id="home">
          <img src={homeSection.image} />
          <div className="kolom">{parse(homeSection.content)}</div>
        </section>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0099ff"
            fillOpacity="1"
            d="M0,128L40,128C80,128,160,128,240,154.7C320,181,400,235,480,229.3C560,224,640,160,720,144C800,128,880,160,960,192C1040,224,1120,256,1200,234.7C1280,213,1360,139,1400,101.3L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>

        {/* Tutors Section */}
        <section id="tutors">
          <div className="tengah">
            <div className="kolom">{parse(tutorsSection.content)}</div>
            <Tutors tutorsList={tutorsList} />
          </div>
        </section>

        {/* Course Section */}
        <section id="courses">
          <div className="kolom">{parse(coursesSection.konten)}</div>
          <img src={coursesSection.image} />
        </section>

        {/* partners */}
        <section id="partners">
          <div className="tengah">
            <div className="kolom">{parse(partnerSection.content)}</div>
          </div>
        </section>
        <Partners partnerList={partnerList} />
      </div>
      <Contact contactSection={contactSection} />
      <Footer />
    </>
  );
}

export default Home;

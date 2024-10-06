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

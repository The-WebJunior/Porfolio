import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Project from "./Project";

import Experience from "./Experience";
import Navbar from "./Navbar";
import Layout from "./layout";
export default function Portfolio() {
  return (
    <div>
      {/* <Layout /> */}
      <div className="">
        <Navbar />
        <div>
          <Home />
        </div>
        <div className="mt-80 ps-4 pe-4">
          <About />
        </div>
        <div className="mt-36 ps-8 pe-8">
          <Experience />
        </div>
        <div className="mt-36 ">
          <Project />
        </div>
        <div className="mt-48 ">
          <Contact />
        </div>
      </div>
    </div>
  );
}

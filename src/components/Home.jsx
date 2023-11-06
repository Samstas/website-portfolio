import { FaFileDownload } from "react-icons/fa";
import { HiArrowNarrowDown, HiArrowNarrowRight } from "react-icons/hi";
// import HeroImage from "../assets/heroImage.jpg";
import { Link } from "react-scroll";
import SocialLinks from "./SocialLinks";

const Home = () => {
  return (
    <header name="home" className="w-full h-screen bg-indigo">
      <div className=" max-w-screen-lg mx-auto flex flex-col md:flex-col items-center justify-center h-full px-4">
        {/* MY PHOTO  */}
        {/* <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-3xl mx-auto w-2/3 md:w-60"
          />
        </div> */}
        <div className="flex flex-col justify-center items-center h-full">
          <p className="text-gray-500 py-4 max-w-md">
            Hi, my name is
          </p>
          <h2 className="text-6xl text-center sm:text-7xl font-bold text-white">
            STAS SAMOZVAN
          </h2>
          <p className="text-gray-300 py-4 max-w-md sm:text-2xl">
            Frontend Web Developer
          </p>
          <SocialLinks />
          <div>
            <a
              href="/resume.pdf"
              download={true}
              className="group text-gray-900 w-fit px-6 py-3 my-2 flex items-center rounded-md bg-lightgray cursor-pointer hover:scale-110 duration-300 "
            >
              Resume
              <span>
                <FaFileDownload className="ml-2 text-gray-700" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;

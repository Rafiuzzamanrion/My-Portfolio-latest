import { Helmet } from "react-helmet";
import { FaInstagram, FaSquareFacebook, FaSquareGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import image from '../../assets/profile (2).jpg'
import './About.css'

const About = () => {
  const [text] = useTypewriter({
    words: ["Rafiuzzaman Rion"],
    typeSpeed: 80,
    deleteSpeed: 90,
    loop: true,
  });

  return (
    <div>
      <Helmet>
        <title>About</title>
      </Helmet>
        <div>
          <h1 className="text-4xl font-bold text-center text-[--clr] uppercase">about <span className="text-[--text]">me</span></h1>
        </div>
      <div className="grid lg:grid-cols-2 gap-5 mt-12">
        <div className="ps-8 pr-8 lg:ps-16">
          <p className="text-slate-400 text-justify">
            <h2 className="text-xl font-semibold text-[--text]">
              {" "}
              Welcome to the digital realm of innovation{" "}
              <span className=" text-[--clr]">!!</span>{" "}
            </h2>{" "}
            <h1 className="text-3xl font-extrabold mt-2 mb-1 ">
              {" "}
              <span className="text-[--text]">I&apos;m</span>{" "}
              <span className=" text-[--clr] text-4xl">
                {text}
                <Cursor />
              </span>
            </h1>
            a dynamic force in the tech universe. With a{" "}
            <span className="text-[--text] font-semibold text-lg">
              B.Sc. in Computer Science and Engineering
            </span>{" "}
            under my belt, I breathe life into code as a Full Stack Web
            Developer. Crafting digital symphonies from front-end finesse to
            back-end wizardry, I sculpt seamless user experiences. My canvas is
            the web, where I blend artistry and functionality to create
            immersive, boundary-pushing platforms. Diving deep into the
            intricacies of technology, I thrive on weaving elegant solutions for
            complex challenges. My journey is a tapestry of creativity, where
            pixels dance to my coding symphony, redefining user interaction.
            Join me in exploring the infinite possibilities of the digital
            landscape, where innovation knows no bounds. Let&apos;s build
            tomorrow&apos;s digital landscape today.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="avatar">
            <div className="w-96 mask mask-hexagon effect">
              <img src = {image} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-6">
        <h1>
          <Link to={"https://www.facebook.com/rafiuzzaman5683/"}>
            <FaSquareFacebook
              className="mr-5 text-green-400  mb-2 icon"
              size={50}
            />
          </Link>
        </h1>
        <h1>
          <Link to={"https://www.instagram.com/rafiuzzaman_rion/"}>
            <FaInstagram className="mr-2  text-green-400  mb-2 icon" size={50} />
          </Link>
        </h1>
        <h1>
          <Link to={"https://github.com/Rafiuzzamanrion"}>
            {" "}
            <FaSquareGithub className="mr-2  text-green-400 mb-2 icon" size={50} />
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default About;

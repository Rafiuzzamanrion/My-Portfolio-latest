import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "./Hero.css";
import LottieAnimation from "./LottieAnimation";


const Hero = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Web Developer"],
    typeSpeed: 80,
    deleteSpeed: 90,
    loop: true,
  });

  return (
    <div className="min-h-screen min-w-fit">
      <Helmet>
        <title>Home</title>
      </Helmet>
     <div className="flex flex-col lg:flex-row gap-4">
     <div className="lg:w-2/3 mt-24 ps-5 pr-5 lg:ps-24 text-justify">
        <h1
          className="text-[--text] text-8xl font-extrabold"
          data-aos="fade-down-right"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          Hey,I&apos;m Rion<span className="text-[--clr]">.</span>{" "}
        </h1>
        <h2
          className="text-2xl my-12 font-semibold text-[--text]"
          data-aos="fade-down-left"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          Crafting Digital Magic |
          <span className="font-bold text-[--clr]">
            {" "}
            {text}
            <Cursor />
          </span>
        </h2>

        <p
          className="text-slate-400"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1000"
        >
          Welcome to my digital playground, where lines of code transform into
          immersive web experiences. I&apos;m a{" "}
          <span className="font-semibold text-slate-200">
            Full Stack Web Developer
          </span>{" "}
          with a passion for turning ideas into pixel-perfect reality . Explore
          the artistry of technology with me , as we bring your vision to life.
          Let &apos;s code the future together !!
        </p>
        <Link to={"/contact"}>
          <button className="btn my-12 bg-[--clr] border-[--clr] hover:bg-transparent hover:border-b-4 hover:border-[--clr]  hover:text-base-200 style">
            Contact Me
          </button>
        </Link>
      </div>

      {/* ======================================= */}

      <div className="flex justify-center items-center w-[350px] mx-auto"
       data-aos="zoom-in"
       data-aos-easing="linear"
       data-aos-duration="1000">
        <LottieAnimation></LottieAnimation>
      </div>
     </div>
    
    </div>
  );
};

export default Hero;

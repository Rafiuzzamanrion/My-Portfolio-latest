import {Link} from "react-router-dom";
import { useTypewriter ,Cursor} from "react-simple-typewriter"

const Hero = () => {

    const [text] =useTypewriter({
        words : ["Full Stack Web Developer" ],
        typeSpeed : 80,
        deleteSpeed : 90,
        loop : true
      });

    return (
        <div className="">
           <div className="w-2/3 mt-28  ps-5 pr-5 lg:ps-28 ">
            <h1 className="text-[--text] text-8xl font-extrabold">Hey,I&apos;m Rion<span className="text-[--clr]">.</span> </h1>
            <h2 className="text-2xl my-12 font-semibold text-[--text]">Crafting Digital Magic  |<span className="font-bold text-[--clr]"> {text}<Cursor/></span></h2>

            <p className="text-slate-400">Welcome to my digital playground, where lines of code transform into immersive web experiences. I&apos;m a <span className="font-semibold text-slate-200">Full Stack Web Developer</span> with a passion for turning ideas into pixel-perfect reality. Explore the artistry of technology with me, as we bring your vision to life. <br /> Let &apos;s code the future together !!
            </p>
            <Link to={'/contact'}><button className="btn my-10 bg-[--clr] border-[--clr] hover:bg-transparent hover:border-b-4 hover:border-[--clr]  hover:text-base-200">Contact Me</button></Link>
           </div>
           <div>

           </div>
        </div>
    );
};

export default Hero;
import {Helmet} from "react-helmet";
import './Skills.css'
import {  FaReact } from 'react-icons/fa';
import {  FaBootstrap, FaCss3Alt, FaHtml5, FaNode } from 'react-icons/fa6';
import {  SiChakraui, SiDaisyui, SiExpress, SiFirebase, SiJavascript, SiMongodb, SiTailwindcss } from 'react-icons/si';


const Skills = () => {
    return (
        <div>
             <Helmet>
                <title>Skills</title>
            </Helmet>
            <div>
           
               <h1 className="text-[--clr] text-6xl font-extrabold uppercase text-center mt-8"> ski<span className="text-[--text]">lls</span></h1>
             
            <div className="container ps-20 grid md:grid-cols-3">
        <div className="card"  data-aos="fade-down-right"
            data-aos-easing="linear"
            data-aos-duration="1000">
            <div className="face face1 w-60 h-40">
                <div className="content">
                    <div className="icon flex justify-center items-center">
                    <FaReact size={120}/>
                    </div>
                </div>
            </div>
            <div className="face face2">
                <div className="content flex flex-col justify-center items-center">
                    <h3 className="text-3xl font-semibold text-black">
                      React
                    </h3>
                    <p className="text-black">
        I&apos;m a proficient React developer with a knack for crafting dynamic and responsive user interfaces.</p>
                </div>
            </div>
        </div>
        {/* item 2 */}
        <div className="card" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000">
            <div className="face face1 w-60 h-40">
                <div className="content">
                    <div className="icon flex justify-center items-center">
                    <SiJavascript size={120}/>
                    </div>
                </div>
            </div>
            <div className="face face2">
                <div className="content flex flex-col justify-center items-center">
                <h3 className="text-3xl font-semibold text-black">
                      JavaScript
                    </h3>
                    <p className="text-black">
                    Proficient in JavaScript, I weave interactivity and functionality into seamless web experiences.</p>
                </div>
            </div>
        </div>
        {/* item 2 */}
        
        <div className="card"  data-aos="fade-down-left"
            data-aos-easing="linear"
            data-aos-duration="1000">
            <div className="face face1 w-60 h-40">
                <div className="content">
                    <div className="icon flex justify-center items-center">
                    <FaNode size={120}/>
                    </div>
                </div>
            </div>
            <div className="face face2">
                <div className="content flex flex-col justify-center items-center">
                <h3 className="text-3xl font-semibold text-black">
                      Node.js
                    </h3>
                    <p className="text-black">
                    Mastering Node.js, I harness its power to build robust, scalable server-side solutions.</p>
                </div>
            </div>
        </div>
        {/* item 2 */}
        

        <div className="card" data-aos="fade-down-right"
            data-aos-easing="linear"
            data-aos-duration="1000">
            <div className="face face1 w-60 h-40">
                <div className="content">
                    <div className="icon flex justify-center items-center">
                    <SiExpress size={120}/>
                    </div>
                </div>
            </div>
            <div className="face face2">
                <div className="content flex flex-col justify-center items-center">
                <h3 className="text-3xl font-semibold text-black">
                      Express.js
                    </h3>
                    <p className="text-black">
                    Express.js maestro, I sculpt robust, server-side solutions that power dynamic web applications with finesse.</p>
                </div>
            </div>
        </div>
        {/* item 2 */}
        
        <div className="card"  data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000">
            <div className="face face1 w-60 h-40">
                <div className="content">
                    <div className="icon flex justify-center items-center">
                    <SiMongodb size={120}/>
                    </div>
                </div>
            </div>
            <div className="face face2">
                <div className="content flex flex-col justify-center items-center">
                <h3 className="text-3xl font-semibold text-black">
                      MongoDB
                    </h3>
                    <p className="text-black">
                    Mastering MongoDB, I harness the power of NoSQL to shape robust and scalable data solutions.</p>
                </div>
            </div>
        </div>
        {/* item 2 */}
        <div className="card"  data-aos="fade-down-left"
            data-aos-easing="linear"
            data-aos-duration="1000">
            <div className="face face1 w-60 h-40">
                <div className="content">
                    <div className="icon flex justify-center items-center">
                    <SiTailwindcss size={120}/>
                    </div>
                </div>
            </div>
            <div className="face face2">
                <div className="content flex flex-col justify-center items-center">
                <h3 className="text-3xl font-semibold text-black">
                      Tailwind
                    </h3>
                    <p className="text-black">
                    With Tailwind CSS, I craft visually stunning and highly efficient user interfaces that are as sleek as they are functional.</p>
                </div>
            </div>
        </div>
        <div className="card" data-aos="fade-down-right"
            data-aos-easing="linear"
            data-aos-duration="1000">
            <div className="face face1 w-60 h-40">
                <div className="content">
                    <div className="icon flex justify-center items-center">
                    <SiDaisyui size={120}/>
                    </div>
                </div>
            </div>
            <div className="face face2">
                <div className="content flex flex-col justify-center items-center">
                <h3 className="text-3xl font-semibold text-black">
                     DaisyUI
                    </h3>
                    <p className="text-black">
                    With expertise in DaisyUI, I design and develop stunning user interfaces that captivate and engage.</p>
                </div>
            </div>
        </div>
        {/* item 2 */}
        <div className="card" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000">
            <div className="face face1 w-60 h-40">
                <div className="content">
                    <div className="icon flex justify-center items-center">
                    <FaBootstrap size={120}/>
                    </div>
                </div>
            </div>
            <div className="face face2">
                <div className="content flex flex-col justify-center items-center">
                <h3 className="text-3xl font-semibold text-black">
                    Bootstrap
                    </h3>
                    <p className="text-black">
                    With Bootstrap, I design responsive and visually appealing web interfaces that adapt flawlessly across all devices and screens.</p>
                </div>
            </div>
        </div>
        {/* item 2 */}
        {/* item 2 */}
        <div className="card"  data-aos="fade-down-left"
            data-aos-easing="linear"
            data-aos-duration="1000">
            <div className="face face1 w-60 h-40">
                <div className="content">
                    <div className="icon flex justify-center items-center">
                    <FaHtml5 size={120}/>
                    </div>
                </div>
            </div>
            <div className="face face2">
                <div className="content flex flex-col justify-center items-center">
                <h3 className="text-3xl font-semibold text-black">
                  HTML-5
                    </h3>
                    <p className="text-black">
                    HTML virtuoso, sculpting the foundation of the web with precision and creativity.</p>
                </div>
            </div>
        </div>
        {/* item 2 */}
        <div className="card" data-aos="fade-down-right"
            data-aos-easing="linear"
            data-aos-duration="1000">
            <div className="face face1 w-60 h-40">
                <div className="content">
                    <div className="icon flex justify-center items-center">
                    <FaCss3Alt size={120}/>
                    </div>
                </div>
            </div>
            <div className="face face2">
                <div className="content flex flex-col justify-center items-center">
                <h3 className="text-3xl font-semibold text-black">
                  CSS-3
                    </h3>
                    <p className="text-black">
                    With a keen eye for design, I wield CSS to craft visually stunning and responsive web interfaces.</p>
                </div>
            </div>
        </div>
        {/* item 2 */}
        <div className="card" data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000">
            <div className="face face1 w-60 h-40">
                <div className="content">
                    <div className="icon flex justify-center items-center">
                    <SiFirebase size={120}/>
                    </div>
                </div>
            </div>
            <div className="face face2">
                <div className="content flex flex-col justify-center items-center">
                <h3 className="text-3xl font-semibold text-black">
                  Firebase
                    </h3>
                    <p className="text-black">
                    Mastering Firebase, I harness its powerful tools to build real-time, scalable, and secure web applications.</p>
                </div>
            </div>
        </div>
        {/* =========== */}
        <div className="card" data-aos="fade-down-left"
            data-aos-easing="linear"
            data-aos-duration="1000">
            <div className="face face1 w-60 h-40">
                <div className="content">
                    <div className="icon flex justify-center items-center">
                    <SiChakraui size={120}/>
                    </div>
                </div>
            </div>
            <div className="face face2">
                <div className="content flex flex-col justify-center items-center">
                <h3 className="text-3xl font-semibold text-black">
                  ChakraUI
                    </h3>
                    <p className="text-black">
                    With a keen mastery of Chakra UI, I craft visually stunning and highly functional user interfaces that captivate and engage.</p>
                </div>
            </div>
        </div>
        {/* item 2 */}
        





              </div>
            </div>
        </div>
    );
};

export default Skills;
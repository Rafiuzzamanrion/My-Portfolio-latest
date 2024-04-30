import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import imgMeal from "../../assets/meal-3.jpg";
import imgNews from "../../assets/newspaper.jpg";
import imgCar from "../../assets/car.jpg";
import imgAmazon from "../../assets/amazon.png";
import imgAds from "../../assets/ads.png";
import imgTask from "../../assets/taskpad.png";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="mx-2">
      <Helmet>
        <title>Projects</title>
      </Helmet>

      <div>
        <h1 className="text-4xl font-bold text-[--clr] text-center uppercase my-10">
          latest<span className="text-[--text]"> Projects</span>
        </h1>
      </div>
      <section className="portfolio">
        <div className="portfolio-container grid lg:grid-cols-2 gap-4">
          <div
            className="portfolio-box"
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <img className="object-cover" src={imgAmazon} alt="" />
            <div className="portfolio-layer">
              <h4 className="text-[--text] font-bold uppercase my-auto">
                Amazon <span className="text-[--clr]">Store</span>
              </h4>
              <p className="text-[--text] text-justify">
                I have Created an Amazon store using the MERN stack, offering a
                seamless shopping experience with MongoDB, Express.js, React.js,
                and Node.js.
              </p>
              <Link
                to={"https://amazon-client-eight.vercel.app/"}
                className="inline-flex justify-center items-center mb-3 mt-5"
              >
                <button className="btn bg-white border-[--clr] hover:bg-[--bg-light] border-2 hover:border-[--clr]  hover:text-white">
                  <FaExternalLinkAlt size={20} />
                  View project
                </button>
              </Link>
            </div>
          </div>
          {/* ========== project =========== */}
          <div
            className="portfolio-box"
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <img className="object-cover" src={imgMeal} alt="" />
            <div className="portfolio-layer">
              <h4 className="text-[--text] font-bold uppercase my-auto">
                Meal <span className="text-[--clr]">Cage</span>
              </h4>
              <p className="text-[--text] text-justify">
                Explore &apos;Meal Cage&apos; , a React masterpiece in my
                portfolio. Witness the synergy of components, state management,
                and responsive design that power this flavorful culinary web
                experience.
              </p>
              <Link
                to={"https://meal-cage-client.vercel.app/"}
                className="inline-flex justify-center items-center mb-3 mt-5"
              >
                <button className="btn bg-white border-[--clr] hover:bg-[--bg-light] border-2 hover:border-[--clr]  hover:text-white">
                  <FaExternalLinkAlt size={20} />
                  View project
                </button>
              </Link>
            </div>
          </div>

          {/* ========== project =========== */}
          <div
            className="portfolio-box"
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <img className="object-cover" src={imgCar} alt="" />
            <div className="portfolio-layer">
              <h4 className="text-[--text] font-bold uppercase my-auto">
                Car <span className="text-[--clr]">Doctor</span>
              </h4>
              <p className="text-[--text] text-justify">
                As the architect behind Car Repair, I&apos;ve meticulously
                crafted a digital pit stop where cutting-edge technology meets
                automotive expertise. I&apos;ve engineered to redefine the way
                you connect with car servicing.
              </p>
              <Link
                to={"https://car-doctor-client-amber.vercel.app/"}
                className="inline-flex justify-center items-center mb-3 mt-5"
              >
                <button className="btn bg-white border-[--clr] hover:bg-[--bg-light] border-2 hover:border-[--clr]  hover:text-white">
                  <FaExternalLinkAlt size={20} />
                  View project
                </button>
              </Link>
            </div>
          </div>
          {/* ========== project =========== */}

          <div
            className="portfolio-box"
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <img className="object-cover" src={imgNews} alt="" />
            <div className="portfolio-layer">
              <h4 className="text-[--text] font-bold uppercase my-auto">
                the <span className="text-[--clr]">dragon news</span>
              </h4>
              <p className="text-[--text] text-justify">
                As the developer behind Dragon News, I blend innovation with
                functionality to bring you a seamless and engaging news-reading
                experience.
              </p>
              <Link
                to={"https://the-news-dragon-client-topaz.vercel.app/"}
                className="inline-flex justify-center items-center mb-3 mt-5"
              >
                <button className="btn bg-white border-[--clr] hover:bg-[--bg-light] border-2 hover:border-[--clr]  hover:text-white">
                  <FaExternalLinkAlt size={20} />
                  View project
                </button>
              </Link>
            </div>
          </div>
          {/* ========== project =========== */}
          <div
            className="portfolio-box"
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <img className="object-cover" src={imgAds} alt="" />
            <div className="portfolio-layer">
              <h4 className="text-[--text] font-bold uppercase my-auto">
                Meta <span className="text-[--clr]">Ads Shop</span>
              </h4>
              <p className="text-[--text] text-justify">
                Proudly presenting Meta Ads Shop, where innovation meets
                advertising brilliance. Transform your brand&apos;s visibility
                with our cutting-edge platform developed to drive success
              </p>
              <Link
                to={"https://facebook-add-house.vercel.app/"}
                className="inline-flex justify-center items-center mb-3 mt-5"
              >
                <button className="btn bg-white border-[--clr] hover:bg-[--bg-light] border-2 hover:border-[--clr]  hover:text-white">
                  <FaExternalLinkAlt size={20} />
                  View project
                </button>
              </Link>
            </div>
          </div>
          {/* ========== project =========== */}
          <div
            className="portfolio-box"
            data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <img className="object-cover" src={imgTask} alt="" />
            <div className="portfolio-layer">
              <h4 className="text-[--text] font-bold uppercase my-auto">
                Meta <span className="text-[--clr]">Task Pad</span>
              </h4>
              <p className="text-[--text] text-justify">
                Task Pad: Task Pad Built with MERN stack, Task
                Pad streamlines workflow organization with intuitive features
                and seamless integration. It&apos;s your efficient task management
                solution.
              </p>
              <Link
                to={"https://task-pad-client.vercel.app/"}
                className="inline-flex justify-center items-center mb-3 mt-5"
              >
                <button className="btn bg-white border-[--clr] hover:bg-[--bg-light] border-2 hover:border-[--clr]  hover:text-white">
                  <FaExternalLinkAlt size={20} />
                  View project
                </button>
              </Link>
            </div>
          </div>
          {/* ========== project =========== */}
        </div>
      </section>
    </div>
  );
};

export default Projects;

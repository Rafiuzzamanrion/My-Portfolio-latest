import { Helmet } from "react-helmet";
import { FaHome, FaPhone } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  const contactTab = [
    {
      icon: <FaHome className="text-4xl" />,
      title: "Address",
      desription: `Sector-07,Uttara,Dhaka, Bangladesh`,
    },
    {
      icon: <FaPhone className="text-4xl" />,
      title: "Contact Number",
      desription: `+8801751073892`,
    },
    {
      icon: <AiOutlineMail className="text-4xl" />,
      title: "Email Address",
      desription: `rafiujjaman5683@gmail.com`,
    },
  ];
  return (
    <div>
      <Helmet>
        <title>Contact</title>
      </Helmet>

      <>
        <div>
          {" "}
          <div
            className=" mx-auto text-center mt-10 p-4 mb-16 rounded-xl"
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
          >
            <div className="text-3xl font-bold text-[--clr] uppercase mb-5">
              Contact me
            </div>
            <div className=" text-[--text]">
              Let&apos;s connect and make magic happen! Whether you have a
              project in mind, a collaboration to explore, or just want to say
              hello, I&apos;m one click away from turning your vision into
              reality. Don&apos;t hesitate to reach out, and let&apos;s start
              crafting your digital dreams together.
            </div>
          </div>
          {/* Cards */}
          <div className="grid lg:grid-cols-3 gap-5">
            {contactTab.map((x, index) => {
              return (
                <div
                  key={index}
                  className="card shadow-xl bg-[--bg-light] border border-[--clr]"
                >
                  <div
                    className="card-body items-center text-center"
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="800"
                  >
                    <h2 className="card-title text-[--text]">{x.icon}</h2>
                    <p className="text-lg font-bold my-3 text-[--clr]">
                      {x.title}
                    </p>
                    <div className="">
                      <p className=" text-lg font-semibold text-[--text]">
                        {x.desription}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>

      <div className="p-10 mt-8 flex justify-center items-center">
        <form className=" bg-[--bg-light] p-4 rounded-xl shadow-xl border border-[--clr]">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-base-100">Your Name</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Type here"
                className="input input-bordered bg-[--text] input-success w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-base-100">Your Email</span>
              </label>
              <input
                type="text"
                name="email"
                required
                placeholder="Type here"
                className="input bg-[--text] input-success input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base-100">Description</span>
            </label>
            <textarea
            name="description"
            required
              className="textarea bg-[--text] textarea-success textarea-bordered h-24"
              placeholder="Describe here"
            ></textarea>
           
          </div>
          <div className="flex justify-center items-center mt-5">
          <input className="btn bg-transparent text-base-100 border-[--clr] hover:bg-[--clr] hover:border-[--clr] hover:text-black" type="button" value="send message" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

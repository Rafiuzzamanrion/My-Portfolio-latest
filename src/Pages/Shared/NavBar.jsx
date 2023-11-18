import { Link } from "react-router-dom";
import "./NavBar.css";


import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  return (
    <div>
     
      <div className="flex flex-row justify-between ms-2 mr-2 bg-[--bg-dark] shadow p-3 uppercase">
    
        <nav className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden text-[--text]">
            <GiHamburgerMenu size={35} />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content z-[1] p-2 shadow-xl bg-[--bg-dark] rounded-box w-18 my-2"
          >
            {/*========= nav here=========  */}
            <Link
              className="mt-1  text-[--text] hover:border-b-4 border-[--clr] hover:text-[--clr]"
              to={"/"}
            >
              Home
            </Link>
            <Link
              className="mt-1  text-[--text] hover:border-b-4 border-[--clr] hover:text-[--clr]"
              to={"/about"}
            >
              About
            </Link>
            <Link
              className="mt-1 text-[--text] hover:border-b-4 border-[--clr] hover:text-[--clr]"
              to={"/skills"}
            >
              Skill
            </Link>
            <Link
              className="mt-1 text-[--text] hover:border-b-4 border-[--clr] hover:text-[--clr]"
              to={"/projects"}
            >
              Project
            </Link>
            <Link
              className="mt-1 text-[--text] hover:border-b-4 border-[--clr] hover:text-[--clr]"
              to={"/contact"}
            >
              Contact
            </Link>
          </ul>
          
        </nav>
        
        {/* ================= */}
        <div className="lg:hidden">
          <button className="btn bg-transparent text-base-100 border-[--clr] hover:bg-[--clr] hover:border-[--clr] hover:text-black">
            Resume
          </button>
        </div>
        <nav className="hidden lg:flex justify-center items-center">
          <Link
            className="mr-8 text-[--text] hover:border-b-4 border-[--clr] hover:text-[--clr]"
            to={"/"}
          >
            Home
          </Link>
          <Link
            className="mr-8 text-[--text] hover:border-b-4 border-[--clr] hover:text-[--clr]"
            to={"/about"}
          >
            About
          </Link>
          <Link
            className="mr-8 text-[--text] hover:border-b-4 border-[--clr] hover:text-[--clr]"
            to={"/skills"}
          >
            Skill
          </Link>
          <Link
            className="mr-8 text-[--text] hover:border-b-4 border-[--clr] hover:text-[--clr]"
            to={"/projects"}
          >
            Project
          </Link>
          <Link
            className="mr-8 text-[--text] hover:border-b-4 border-[--clr] hover:text-[--clr]"
            to={"/contact"}
          >
            Contact
          </Link>
          <div className="flex justify-center items-center">
            <button className="btn bg-transparent text-base-100 border-[--clr] hover:bg-[--clr] hover:border-[--clr] hover:text-black">
              Resume
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;

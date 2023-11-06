import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

function NavBar() {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      name: "HOME",
      linkName: "home",
    },
    // {
    //   id: 2,
    //   name: "ABOUT",
    //   linkName: "about",
    // },
    {
      id: 2,
      name: "PORTFOLIO",
      linkName: "portfolio",
    },
    // {
    //   id: 4,
    //   name: "SKILLS",
    //   linkName: "skills",
    // },
    {
      id: 3,
      name: "CONTACT",
      linkName: "contact",
    },
  ];

  return (
    <nav className="flex px-4 bg-indigo justify-end items-center w-full h-20 text-white fixed z-10">
      {/* NAME OR LOGO  */}

      {/* <div>
        <h1 className="text-2xl ml-2">SAM</h1>
      </div> */}

      <ul className="hidden md:flex ">
        {links.map(({ id, linkName, name }) => (
          <li
            className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-110 hover:text-gray-400 duration-200"
            key={id}
          >
            <Link to={linkName} smooth duration={500}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
      {/* burger menu  */}
      <div
        onClick={() => setNav((nav) => !nav)}
        className="cursor-pointer pr-4 z-10 text-white md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {/* small screen nav  */}
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen h-screen bg-indigo text-white">
          {links.map(({ id, linkName, name }) => (
            <li
              className="px-4 cursor-pointer capitalize py-6 text-2xl"
              key={id}
            >
              <Link
                onClick={() => setNav(() => !nav)}
                to={linkName}
                smooth={true}
                duration={500}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default NavBar;

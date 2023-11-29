import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function SocialLinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/stanislav-samozvan-ab9528290/",
      name: "LinkedIn",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Samstas",
      name: "GitHub",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:ssreactdev@gmail.com",
      name: "Mail",
    },
    {
      id: 4,
      child: (
        <>
          <FaInstagram size={30} />
        </>
      ),
      href: "https://www.instagram.com/sam.stas",
      name: "Instagram",
    },
    // {
    //   id: 5,
    //   child: (
    //     <>
    //       <BsFillPersonLinesFill size={30} />
    //     </>
    //   ),
    //   href: "/resume.pdf",
    //   download: true,
    // },
  ];

  return (
    <ul className="flex gap-2 my-3">
      {links.map(({ id, child, name, href }) => (
        <li key={id} className={`px-1  duration-200 hover:scale-110`}>
          <a
            href={href}
            className=" text-white hover:text-gray-400 duration-200 hover:scale-110"
            target="_blank"
            rel="noreferrer"
            title={name}
          >
            {child}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;

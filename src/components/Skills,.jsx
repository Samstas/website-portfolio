import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import redux from "../assets/redux.png";
import query from "../assets/react-query.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: reactImage,
      title: "React.js",
      style: "shadow-blue-600",
    },
    {
      id: 2,
      // src: reactImage,
      title: "Next.js",
      style: "shadow-blue-600",
    },
    // {
    //   id: 3,
    //   // src: javascript,
    //   title: "JavaScript",
    //   style: "shadow-yellow-500",
    // },
    {
      id: 3,
      // src: javascript,
      title: "TypeScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: query,
      title: "React Query",
      style: "shadow-gray-400",
    },
    {
      id: 5,
      src: redux,
      title: "Redux Toolkit",
      style: "shadow-gray-400",
    },
    // {
    //   id: 1,
    //   src: html,
    //   title: "HTML",
    //   style: "shadow-orange-500",
    // },
    // {
    //   id: 2,
    //   src: css,
    //   title: "CSS",
    //   style: "shadow-blue-500",
    // },

    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },

    // {
    //   id: 6,
    //   src: github,
    //   title: "GitHub",
    //   style: "shadow-gray-400",
    // },
  ];

  return (
    <>
      <ul className=" flex justify-center sm:flex-row flex-row sm:flex sm:items-center sm:justify-center  text-center pb-8  sm:px-16  ">
        {techs.map(({ id, title }) => (
          <li
            key={id}
            className={` flex items-center  shadow-md w-15 text-[10px] sm:text-sm hover:scale-105 duration-500 py-1 px-1 sm:px-3 mx-[2px]  sm:mx-[10px] rounded-lg bg-gray text-white`}
          >
            {/* <img src={src} alt="" className="w-20 mx-auto p-3 " /> */}
            <p className=" sm:text-[14p]">{title}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Skills;

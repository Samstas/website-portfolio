import { AiFillHtml5 } from "react-icons/ai";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import redux from "../assets/redux.png";
import query from "../assets/react-query.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 2,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      src: query,
      title: "React Query",
      style: "shadow-gray-400",
    },
    {
      id: 4,
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
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },

    {
      id: 6,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div name="skills" className="bg-purple w-full h-screen pt-16 ">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center  w-full h-full text-white">
        <div className="text-center">
          <p className="text-4xl font-bold  p-2 inline">Skills</p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-6 gap-8 text-center py-8  px-16 sm:px-0 ">
          {techs.map(({ id, src, title }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-3 rounded-lg bg-indigo`}
            >
              <img src={src} alt="" className="w-20 mx-auto p-2 " />
              <p className="mt-[10px]">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

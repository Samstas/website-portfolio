import quiz from "../assets/portfolio/quiz.png";
import pizza from "../assets/portfolio/pizza.png";
import oasis from "../assets/portfolio/oasis.png";
import Skills from "./Skills,";

const Portfolio = () => {
  const portfolios = [
    // {
    //   id: 1,
    //   name: "React Quiz",
    //   src: quiz,
    //   gitHubCode: "https://github.com/Samstas/react-quiz",
    //   demoLink: "https://react-quiz-steel.vercel.app/",
    // },
    {
      id: 2,
      name: "React Pizza",
      src: pizza,
      gitHubCode: "https://github.com/Samstas/fast-react-pizza",
      demoLink: "https://fast-react-pizza-eosin-chi.vercel.app/",
    },
    {
      id: 3,
      name: "The Wild Oasis",
      src: oasis,
      gitHubCode: "https://github.com/Samstas/the-wild-oasis",
      demoLink: "https://sam-the-wild-oasis.netlify.app",
    },
  ];

  return (
    <section name="portfolio" className="bg-lightgray text-gray pt-20">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-2 flex flex-col  items-center">
          <p className="text-4xl font-bold inline ">Portfolio</p>
          <p className="py-3 text-center">
            Check out my skills and some of my pet projects right here
          </p>
        </div>

        <Skills />

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-6 px-12 sm:px-0">
          {portfolios.map(({ id, name, src, gitHubCode, demoLink }) => (
            <div key={id} className="rounded-lg">
              {/* PROJECT IMAGE  */}
              <img
                src={src}
                alt={name}
                className="rounded-md duration-200 hover:shadow-white "
              />

              {/* PROJECT BUTTONS AND INFO  */}
              <div className="flex items-center justify-center">
                <a
                  target="_blank"
                  href={demoLink}
                  rel="noreferrer"
                  title="Website"
                  className="text-center bg-indigo text-white rounded-lg w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105 hover:bg-purple"
                >
                  <button>Demo</button>
                </a>
                <a
                  target="_blank"
                  href={gitHubCode}
                  rel="noreferrer"
                  title="GitHub Code"
                  className="text-center bg-indigo text-white rounded-lg w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105 hover:bg-purple"
                >
                  <button>Code</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

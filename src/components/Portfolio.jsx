import quiz from "../assets/portfolio/quiz.png";
import pizza from "../assets/portfolio/pizza.png";
import oasis from "../assets/portfolio/oasis.png";
import Skills from "./Skills,";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: quiz,
    },
    {
      id: 2,
      src: pizza,
    },
    {
      id: 3,
      src: oasis,
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
          {portfolios.map(({ id, src }) => (
            <div key={id} className="rounded-lg">
              {/* PROJECT IMAGE  */}
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:shadow-white "
              />

              {/* PROJECT BUTTONS AND INFO  */}
              <div className="flex items-center justify-center">
                <button className="bg-indigo text-white rounded-lg w-1/2 px-6 py-1 m-4 duration-200 hover:scale-105 hover:bg-purple">
                  Demo
                </button>
                <button className="bg-indigo text-white  rounded-lg px-6 py-1 w-1/2 m-4 duration-200 hover:scale-105  hover:bg-purple">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

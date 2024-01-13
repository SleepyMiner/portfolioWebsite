import React from "react";
import Type from "./TypeEffect";

function HeroSection() {
  return (
    <>
      <section>
        <div className=" text-purple-700 py-20">
          <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
            <div className="flex flex-col w-1/3 lg:w-1/3 justify-center items-start p-0">
              <h1 className="text-3xl md:text-5xl p-2 text-white tracking-loose">
                Hi! <br />
                I'm <span className="text-purple-700">Swayam Gupta</span>
              </h1>
              <h2 className="text-xl md:text-5xl leading-relaxed md:leading-snug mb-2">
                <Type />
              </h2>
            </div>
            <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
              <div className="h-48 flex flex-wrap justify-end content-center">
                <div>
                  <img
                    className=" mt-28 xl:block max-h-96 bg-blend-normal"
                    src="https://raw.githubusercontent.com/soumyajit4419/Portfolio/2e2e4bd3af6b394daa5ca46ddd084ed1bdce8ec0/src/Assets/home-main.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;

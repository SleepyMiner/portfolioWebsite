import React from "react";
import Type from "./TypeEffect";
import homeSvg from "../assets/home-main.svg";

function HeroSection() {
  return (
    <>
      <section>
        <div className=" text-[#ffffff] py-20">
          <div className="container mx-auto flex flex-col md:flex-row items-center mb-12 md:mb-24">
            <div className="flex flex-col w-1/3 lg:w-1/3 justify-center items-start p-0 sm:items-center sm:justify-center">
              <h1 className="text-3xl md:text-5xl p-2 text-[#dbc8ff] tracking-loose">
                Hi! I'm <span className="text-[#b691ff]">Swayam Gupta</span>
              </h1>
              <h2 className="text-xl md:text-5xl leading-relaxed md:leading-snug mb-2">
                <Type />
              </h2>
            </div>
            <div className="p-8 mt-12 mb-6 md:mb-0 md:mt-0 ml-0 md:ml-12 lg:w-2/3  justify-center">
              <div className="h-48 flex flex-wrap justify-end content-center">
                <div>
                  <img className=" mt-28 xl:block max-h-96" src={homeSvg} />
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

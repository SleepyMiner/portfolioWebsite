import React from "react";
import myPic from "../assets/myPic.png";
function HomeAbout() {
  return (
    <>
      <section>
        <div className=" text-[#ffffff] py-10 px-10">
          <div className="container mx-auto flex lg:flex-row items-center justify-center flex-col my-10 md:my-10 ">
            <div className="p-8 ml-0 md:ml-12 lg:w-2/3">
              <div className="mb-16 lg:mb-0 flex flex-wrap justify-start content-center  ">
                <img
                  className="h-80 mt-0 xl:block max-h-96 rounded-full"
                  src={myPic}
                />
              </div>
            </div>
            <div className="flex flex-col lg:w-1/3 lg:justify-end lg:content-center lg:text-justify lg:mr-8 text-center">
              <h1 className="text-3xl md:text-5xl mb-2 text-[#b691ff] tracking-loose">
                My Introduction
              </h1>
              <h2 className="text-xl text-[#ffffff] leading-relaxed md:leading-snug mb-2">
                <ul>
                  <li className="mb-3">
                    I am a passionate programmer who is really interested in new
                    Tech Stacks and Languages.
                  </li>
                  <li className="mb-3">
                    I have learnt a lot of userful things in my journey of
                    building projects.
                  </li>
                  <li className="mb-3">
                    I am really fluent in{" "}
                    <span className="italic text-[#dbc8ff]">
                      C++, JavaScript and Python.
                    </span>
                  </li>
                  <li className="mb-3">
                    My field of interests are{" "}
                    <span className="italic text-[#dbc8ff]">
                      Web Development, API Development and Machine Learning.
                    </span>
                  </li>
                  <li className="mb-3">
                    I also love to contribute to{" "}
                    <span className="italic text-[#dbc8ff]">
                      Open Source Projects.
                    </span>
                  </li>
                  <li className="mb-3">
                    Apart from from Programming I love to play Games, Writing
                    and Reading Blogs about new things in the world.
                  </li>
                </ul>
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeAbout;

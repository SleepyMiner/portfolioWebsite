import React from "react";
import { Divider } from "@mui/material";
const SkillNames = [
  {
    id: 1,
    name: "HTML",
  },
  {
    id: 2,
    name: "CSS",
  },
  {
    id: 3,
    name: "JavaScript",
  },
  {
    id: 4,
    name: "React",
  },
  {
    id: 5,
    name: "ExpressJS",
  },
  {
    id: 6,
    name: "MongoDB",
  },
  {
    id: 7,
    name: "Node.JS",
  },
  {
    id: 8,
    name: "Git",
  },
  {
    id: 9,
    name: "Python",
  },
  {
    id: 10,
    name: "TailwindCSS",
  },
  {
    id: 11,
    name: "Material UI",
  },
  {
    id: 12,
    name: "C++",
  },
  {
    id: 13,
    name: "DSA",
  },
  {
    id: 14,
    name: "PHP",
  },
];

function Skills() {
  return (
    <>
      <section className="section skills" id="skills">
        <h2 className="text-5xl text-[#b691ff] text-center">Skills</h2>
        <Divider variant="middle" />
        <div className="mx-0 my-auto flex justify-center items-center flex-wrap text-[#410f70] text-xl space-x-6 mb-5">
          {SkillNames.map((skill) => (
            <button
              className="transition ease-in-out delay-100 bg-[#dbc8ff] hover:-translate-y-1 hover:scale-110  duration-100 mt-5 shadow-xl shadow-gray-900 px-6 rounded-3xl"
              key={skill.id}
            >
              {skill.name}
            </button>
          ))}
        </div>
      </section>
    </>
  );
}

export default Skills;

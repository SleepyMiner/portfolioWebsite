import React from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { Home, FolderKanban, File, Contact, Linkedin } from "lucide-react";
import { FaCode } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#220b4e",
    color: "#fff",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
  },
}));

export default function Sidebar(props) {
  return (
    <aside className="flex h-screen w-16 flex-col items-center justify-center overflow-y-auto outline-none py-8 fixed bg-[#b691ff]">
      <nav className="flex flex-1 flex-col items-center space-y-6">
        <a href="#">
          <FaCode size={40} />
        </a>
        <a
          href="#"
          className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none"
          style={{ backgroundColor: `${props.home}` }}
        >
          <HtmlTooltip
            title={
              <React.Fragment>
                <Typography color="inherit">Home</Typography>
              </React.Fragment>
            }
            placement="right"
          >
            <Home size={24} />
          </HtmlTooltip>
        </a>

        <a
          href="#"
          className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none"
        >
          <HtmlTooltip
            title={
              <React.Fragment>
                <Typography color="inherit">Projects</Typography>
              </React.Fragment>
            }
            placement="right"
          >
            <FolderKanban size={24} />
          </HtmlTooltip>
        </a>

        <a
          href="#"
          className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none"
        >
          <HtmlTooltip
            title={
              <React.Fragment>
                <Typography color="inherit">Resume</Typography>
              </React.Fragment>
            }
            placement="right"
          >
            <File size={24} />
          </HtmlTooltip>
        </a>

        <a
          href="#"
          className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none"
        >
          <HtmlTooltip
            title={
              <React.Fragment>
                <Typography color="inherit">Contact</Typography>
              </React.Fragment>
            }
            placement="right"
          >
            <Contact size={24} />
          </HtmlTooltip>
        </a>
      </nav>

      <div className="flex flex-col items-center space-y-6">
        <a
          href="https://github.com/SleepyMiner"
          className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 focus:outline-none hover:bg-purple-600"
          target="_blank"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/swayam-gupta-830ab227b"
          className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 focus:outline-none hover:bg-blue-400"
          target="_blank"
        >
          <Linkedin size={24} />
        </a>

        <a
          href="https://www.instagram.com/_swayam_gupta___/"
          className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 focus:outline-none hover:bg-pink-700"
          target="_blank"
        >
          <FaInstagram size={24} />
        </a>
      </div>
    </aside>
  );
}

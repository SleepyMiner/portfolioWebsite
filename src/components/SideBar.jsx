import React from "react";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import {
  Home,
  FolderKanban,
  File,
  Contact,
  Linkedin,
  Menu,
  X,
} from "lucide-react";
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
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <aside className="lg:flex lg:h-screen lg:w-16 lg:flex-col lg:items-center lg:justify-center lg:overflow-y-auto lg:outline-none lg:py-8 lg:fixed md:bg-[#b691ff] hidden">
        <nav className="flex flex-1 flex-col items-center space-y-6">
          <Link to="/">
            <FaCode size={40} />
          </Link>
          <Link
            to="/"
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
          </Link>

          <Link
            to="/projects"
            className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none"
            style={{ backgroundColor: `${props.projects}` }}
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
          </Link>

          <Link
            to="/resume"
            className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none"
            style={{ backgroundColor: `${props.resume}` }}
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
          </Link>

          <Link
            to="/contact"
            className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none"
            style={{ backgroundColor: `${props.contact}` }}
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
          </Link>
        </nav>

        <div className="flex flex-col items-center space-y-6">
          <a
            href="https://github.com/SleepyMiner"
            className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 focus:outline-none hover:bg-purple-700"
            target="_blank"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/swayam-gupta-830ab227b"
            className="rounded-lg p-1.5 text-gray-700 transition-colors duration-200 focus:outline-none hover:bg-blue-600"
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

      <div className="lg:hidden absolute">
        <Menu
          onClick={toggleMenu}
          className="h-12 w-12 cursor-pointer text-[#b691ff] m-4  "
        />
      </div>
      {isMenuOpen && (
        <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-[#dbc8ff] shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pb-6 pt-5">
              <div className="flex items-center justify-between">
                <div className="-mr-2">
                  <button
                    type="button"
                    onClick={toggleMenu}
                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    <span className="sr-only">Close menu</span>
                    <X className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-4">
                  <Link
                    to="/"
                    className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                  >
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Home
                    </span>
                  </Link>
                  <Link
                    to="/projects"
                    className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                  >
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Projects
                    </span>
                  </Link>
                  <Link
                    to="/resume"
                    className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                  >
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Resume
                    </span>
                  </Link>
                  <Link
                    to="/contact"
                    className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                  >
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Contact
                    </span>
                  </Link>
                </nav>
              </div>
              <div className="mt-4 w-full flex flex-row items-center justify-center gap-7">
                <a
                  href="https://github.com/SleepyMiner"
                  className="rounded-lg p-1.5 text-gray-700"
                  target="_blank"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/swayam-gupta-830ab227b"
                  className="rounded-lg p-1.5 text-gray-700 "
                  target="_blank"
                >
                  <Linkedin size={24} />
                </a>

                <a
                  href="https://www.instagram.com/_swayam_gupta___/"
                  className="rounded-lg p-1.5 text-gray-700"
                  target="_blank"
                >
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

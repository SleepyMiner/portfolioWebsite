import React from "react";
import projectNames from "./ProjectItems.js";
import Sidebar from "../../components/SideBar";
import { Grid } from "@mui/material";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import { FaGithub } from "react-icons/fa";
import { MdLaunch } from "react-icons/md";
import Footer from "../../components/Footer.jsx";

const Projects = () => {
  return (
    <>
      <Grid container spacing={0} className="h-screen w-full bg-[#220b4e]">
        <Grid item xs={0}>
          <Sidebar projects="white" />
        </Grid>
        <Grid item xs={12}>
          <h1 className="text-5xl text-[#b691ff] text-center py-8">Projects</h1>
          <div className="flex items-center justify-center ">
            <hr className="bg-[#dbc8ff] h-1.5 w-80 rounded-full mb-10" />
          </div>
        </Grid>
        <Grid
          container
          item
          xs={12}
          className="lg:pl-24 lg:pr-10 flex justify-center items-center gap-2 bg-[#220b4e]"
        >
          {projectNames.map((item) => (
            <Grid
              item
              xs={5}
              key={item.id}
              className="lg:h-40 lg:w-36 h-30 w-10 gap-4"
            >
              <Card
                className="shadow-xl shadow-gray-800 h"
                style={{ backgroundColor: "#dbc8ff" }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.desc}
                  </Typography>
                </CardContent>
                <CardActions>
                  <div className="rounded-3xl justify-end hover:bg-purple-600 duration-200">
                    <Button size="small" href={item.github} target="_blank">
                      <FaGithub color="black" size={24} />
                    </Button>
                  </div>
                  {item.name === "Aeroplane Booking Website" ? (
                    <div className="hover:bg-purple-600 rounded-3xl duration-200">
                      <Button size="small" href={item.demo} target="_blank">
                        <MdLaunch size={24} color="black" />
                      </Button>
                    </div>
                  ) : (
                    ""
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item sx={12}>
        <Footer />
      </Grid>
    </>
  );
};

export default Projects;

import React from "react";
import Sidebar from "../../components/SideBar";
import HeroSection from "../../components/HeroSection";
import Skills from "../../components/Skills";
import { Grid } from "@mui/material";
import HomeAbout from "../../components/HomeAbout";
import Footer from "../../components/Footer";
function Home() {
  return (
    <>
      <div className="bg-[#220b4e]">
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <Sidebar home="white" />
          </Grid>
          <Grid item xs={11}>
            <HeroSection />
          </Grid>
        </Grid>
        <Grid xs={11}>
          <Skills />
        </Grid>
        <Grid xs={12}>
          <HomeAbout />
        </Grid>
        <Grid xs={12}>
          <Footer />
        </Grid>
      </div>
    </>
  );
}

export default Home;

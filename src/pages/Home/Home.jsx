import React from "react";
import Sidebar from "../../components/SideBar";
import HeroSection from "../../components/HeroSection";
import { Grid } from "@mui/material";
const homeBg =
  "https://images.unsplash.com/photo-1629196914168-3a2652305f9f?q=80&w=1906&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
function Home() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${homeBg})`,
        }}
      >
        <Grid container spacing={0}>
          <Grid item xs={1}>
            <Sidebar home="white" />
          </Grid>
          <Grid item xs={11}>
            <HeroSection />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Home;

import React from "react";
import Sidebar from "../../components/SideBar";
import { Grid } from "@mui/material";
import Footer from "../../components/Footer";
import ContactForm from "./ContactForm";

export function Contact() {
  return (
    <>
      <div className="bg-[#220b4e]">
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <Sidebar contact="white" />
          </Grid>
          <Grid item xs={11}>
            <ContactForm />
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

import React from "react";
import { GoDownload } from "react-icons/go";
import Sidebar from "../../components/SideBar";
import { Grid } from "@mui/material";
import pdf from "../../assets/InternshipResume.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import Footer from "../../components/Footer";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  return (
    <>
      <Grid container spacing={0} className="h-screen w-full bg-[#220b4e]">
        <Grid item xs={0}>
          <Sidebar resume="white" />
        </Grid>
        <Grid item xs={12}>
          <div className=" py-20 flex flex-col justify-center items-center z-2 bg-[#220b4e]">
            <a
              type="button"
              href={pdf}
              target="_blank"
              className="flex flex-row justify-center items-center gap-2 rounded-full bg-[#410f70] px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-[#b691ff] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <GoDownload />
              Download Resume
            </a>
            <Document file={pdf} className="py-10">
              <Page pageNumber={1} />
              <Page pageNumber={2} />
            </Document>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;

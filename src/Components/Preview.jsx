import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import { FaFileDownload, FaHistory } from "react-icons/fa";
import Edit from "./Edit";
import { Link as RouterLink } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function Preview({ userInput, isResumeAdded, resumeID,setUserInput }) {
  console.log(userInput);

  const downloadPDF = async () => {
    const input = document.getElementById("result") // to get the id
    const canvas = await html2canvas(input, { scale: 2 }) // convert the selected html to canvas (screenshot)
    const imgData = canvas.toDataURL("image/png") // convert canvas into image url

    // pdf
    const pdf = new jsPDF("P", "mm", "a4")
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width
    pdf.addImage(imgData, "png", 0, 0, pdfWidth, pdfHeight)
    pdf.save("resume.pdf")
  }



  return (
    <>
      <Stack
        direction={"row"}
        sx={{
          display: "flex",
          justifyContent: "end",
          padding: "50px",
          gap: "10px",
        }}
      >
        {isResumeAdded && (
          <>
            <Edit resumeID={resumeID} setUserInput={setUserInput}/>
            {/* <button className='btn btn-primary'><FaRegEdit /></button> */}
            <button type="button" onClick={downloadPDF} className="btn btn-primary">
              <FaFileDownload />
            </button>
          </>
        )}
        <button className="btn btn-primary">
          <RouterLink
            to="/history"
            style={{ color: "white", textDecoration: "none" }}
          >
            <FaHistory />
          </RouterLink>
        </button>
        <Link href={"/"}>
          <p className="btn text-primary">BACK</p>
        </Link>
      </Stack>

      <div id="result">  
        <Box sx={{ textAlign: "center" }}>
          <Paper elevation={3} sx={{ p: 5 }}>
            <h2>{userInput.professionalData.name}</h2>
            <h6>{userInput.professionalData.jobtitle}</h6>
            <p>
              <span>{userInput.professionalData.location} | </span>
              <span>{userInput.professionalData.email} | </span>
              <span>{userInput.professionalData.phone}</span>
            </p>
  
            <div className="d-flex gap-3 justify-content-center">
              <Link href={userInput.professionalData.github}>GITHUB</Link>
              <Link href={userInput.professionalData.linkedin}>LINKEDIN</Link>
              <Link href={userInput.professionalData.portfolio}>PORTFOLIO</Link>
            </div>
  
            <Divider sx={{ marginTop: "20px" }}>SUMMARY</Divider>
  
            <p style={{ textAlign: "justify" }}>{userInput.summary}</p>
  
            <Divider sx={{ marginTop: "20px" }}>Education</Divider>
  
            <h4>{userInput.educationData.course}</h4>
            <p>
              {userInput.educationData.college} |{" "}
              {userInput.educationData.university} |{" "}
              {userInput.educationData.year}
            </p>
  
            <Divider sx={{ marginTop: "20px" }}>Professional Experience</Divider>
  
            <h4>{userInput.experience.jobrole}</h4>
            <p>
              {userInput.experience.company} | {userInput.experience.joblocation}{" "}
              | {userInput.experience.duration}
            </p>
  
            <Divider sx={{ marginTop: "20px" }}>Skills</Divider>
  
            <div className="d-flex flex-wrap gap-3">
              {userInput.skill.map((item) => (
                <Button key={item} variant="outlined">
                  {item}
                </Button>
              ))}
            </div>
          </Paper>
        </Box>
      </div>
    </>
  );
}

export default Preview;

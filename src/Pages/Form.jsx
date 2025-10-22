import React, { useState } from "react";
import Preview from "../Components/Preview";
import Steps from "./Steps";

function Form() {
  const [userInput, setUserInput] = useState({
    professionalData: {
      name: "",
      jobtitle: "",
      location: "",
      email: "",
      phone: "",
      github: "",
      linkedin: "",
      portfolio: "",
    },
    educationData: {
      course: "",
      college: "",
      university: "",
      year: "",
    },
    experience: {
      jobrole: "",
      company: "",
      joblocation: "",
      duration: "",
    },
    skill: [],
    summary: "",
  });

  const [isResumeAdded, setIsResumeAdded] = useState(false);

  const [resumeID,setresumeID] = useState("")
  // console.log(resumeID);
  

  return (
    <>
      <div className="container-fluid">
        {isResumeAdded ? (
          <div className="row mb-5">
            <div className="col-2"></div>

            <div className="col-8">
              <Preview userInput={userInput} isResumeAdded={isResumeAdded} resumeID={resumeID} setUserInput={setUserInput}/>
            </div>
            <div className="col-2"></div>
          </div>
        ) : (
          <div className="row">
            <div className="col-6 mt-5 p-4">
              <Steps setUserInput={setUserInput} userInput={userInput} setIsResumeAdded={setIsResumeAdded} setresumeID={setresumeID}/>
            </div>
            <div className="col-6 mb-5">
              <Preview userInput={userInput} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Form;


//IT SHOULD HAVE TO BE INSIDE COMPONENTS FOLDER I CREATED IT IN PAGES BY MISTAKE




import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from '@mui/material/TextField';
import { addResumeAPI } from "../service/allAPI";
import Swal from 'sweetalert2'


const steps = [
  "Basic Information",
  "Contact Details",
  "Education Details",
  "Work Experience",
  "Skills & Certification",
  "Review & Submit",
];

function Steps({setUserInput,userInput,setIsResumeAdded,setresumeID}) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set()); 
  const [inputSkill,setInputSkill]=useState("")
  // const [userInput, setUserInput]=useState({
  //   professionalData :{
  //     name:"",
  //     jobtitle:"",
  //     location:"",
  //     email:"",
  //     phone:"",
  //     github:"",
  //     linkedin:"",
  //     portfolio:""

  //   },
  //   educationData:{
  //     course:"",
  //     college:"",
  //     university:"",
  //     year:"",

  //   },
  //   experience:{
  //     jobrole:"",
  //     company:"",
  //     joblocation:"",
  //     duration:"",

  //   },
  //   skill:[],
  //   summary:""
  // })

  console.log(userInput);
  

  const skillsSuggestionArray = ["HTML","CSS","BOOTSTRAP","JAVASCRIPT","TAILWIND","REACT","FIGMA","ANGULAR","MONGODB"]

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const addSkill = (inputSkill) => {
    console.log("user Input skill :" + inputSkill);
    if(inputSkill){
      if(userInput.skill.includes(inputSkill)){
        alert("Given SKill already exist add another")
      }
      else{
        setUserInput({...userInput,skill : [...userInput.skill,inputSkill]})
      }
    }
    
  }

  const removeSkill = (skill)=>{
    // console.log(skill);
    setUserInput({...userInput, skill:userInput.skill.filter(item =>item!=skill)})
    
  }



  const renderStepArrayContent = (stepCount) =>{
    switch (stepCount){
        case 0 : return(
            <div>
                <h1>Personal Details</h1>
                <div className="row p-3">
                    <TextField value={userInput.professionalData.name} onChange={(e)=>setUserInput({...userInput,professionalData:{...userInput.professionalData,name:e.target.value}})} id="Full-Name" label="Full-Name" variant="standard" />
                    <TextField value={userInput.professionalData.jobtitle} onChange={(e)=>setUserInput({...userInput,professionalData:{...userInput.professionalData,jobtitle:e.target.value}})} id="Job-Title" label="Job-Title" variant="standard" />
                    <TextField value={userInput.professionalData.location} onChange={(e)=>setUserInput({...userInput,professionalData:{...userInput.professionalData,location:e.target.value}})}  id="Location" label="Location" variant="standard" />

                </div>
            </div> 
        )
        case 1 : return(
            <div>
                <h1>Contact Details</h1>
                <div className="row p-3">
                    <TextField value={userInput.professionalData.email} onChange={(e)=>setUserInput({...userInput,professionalData:{...userInput.professionalData,email:e.target.value}})} id="email" label="E-Mail" variant="standard" />
                    <TextField value={userInput.professionalData.phone} onChange={(e)=>setUserInput({...userInput,professionalData:{...userInput.professionalData,phone:e.target.value}})} id="phone-number" label="Phone Number" variant="standard" />
                    <TextField value={userInput.professionalData.github} onChange={(e)=>setUserInput({...userInput,professionalData:{...userInput.professionalData,github:e.target.value}})} id="gitHub" label="GitHub Profile Link" variant="standard" />
                    <TextField value={userInput.professionalData.linkedin} onChange={(e)=>setUserInput({...userInput,professionalData:{...userInput.professionalData,linkedin:e.target.value}})} id="linkedIn" label="LinkedIn Profile Link" variant="standard" />
                    <TextField value={userInput.professionalData.portfolio} onChange={(e)=>setUserInput({...userInput,professionalData:{...userInput.professionalData,portfolio:e.target.value}})} id="portfolio" label="Portfolio Profile Link" variant="standard" />

                </div>
            </div>
        )
         case 2 : return(
            <div>
                <h1>Educational Details</h1>
                <div className="row p-3">
                    <TextField value={userInput.educationData.course} onChange={(e)=>setUserInput({...userInput,educationData:{...userInput.educationData,course:e.target.value}})} id="Course-Name" label="Course-Name" variant="standard" />
                    <TextField value={userInput.educationData.college} onChange={(e)=>setUserInput({...userInput,educationData:{...userInput.educationData,college:e.target.value}})} id="College-Name" label="College-Name" variant="standard" />
                    <TextField value={userInput.educationData.university} onChange={(e)=>setUserInput({...userInput,educationData:{...userInput.educationData,university:e.target.value}})} id="University" label="University" variant="standard" />
                    <TextField value={userInput.educationData.year} onChange={(e)=>setUserInput({...userInput,educationData:{...userInput.educationData,year:e.target.value}})} id="Passout" label="Year Of Passout" variant="standard" />

                </div>
            </div>
        )
         case 3 : return(
            <div>
                <h1>Professional Details</h1>
                <div className="row p-3">
                    <TextField value={userInput.experience.jobrole} onChange={(e)=>setUserInput({...userInput,experience:{...userInput.experience,jobrole:e.target.value}})} id="JobInternship" label="Job or Internship" variant="standard" />
                    <TextField value={userInput.experience.company} onChange={(e)=>setUserInput({...userInput,experience:{...userInput.experience,company:e.target.value}})} id="Company-Name" label="Company-Name" variant="standard" />
                    <TextField value={userInput.experience.joblocation} onChange={(e)=>setUserInput({...userInput,experience:{...userInput.experience,joblocation:e.target.value}})} id="Location" label="Location" variant="standard" />
                    <TextField value={userInput.experience.duration} onChange={(e)=>setUserInput({...userInput,experience:{...userInput.experience,duration:e.target.value}})} id="Duration" label="Duration" variant="standard" />

                </div>
            </div>
        )
         case 4 : return(
            <div>
                <h1>Skills</h1>
                <div className="row p-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <TextField value={inputSkill} onChange={(e)=>setInputSkill(e.target.value)} sx={{width:"550px"}} id="enterskills" label="Enter Skills" variant="standard" />
                        <Button onClick={()=>addSkill(inputSkill)} variant="outlined">ADD</Button>
                    </div>
                    <div className="mt-4">
                        <h4>Suggestions</h4>
                        <div className="d-flex gap-2 flex-wrap mt-3">
                            {skillsSuggestionArray.map((userskill)=>(
                                <Button onClick={()=>addSkill(userskill)} key={userskill} variant="contained">{userskill}</Button>
                            ))}
                        </div>
                    </div>
                    <div className="mt-4">
                        <h4>Added Skills : </h4>
                        
                          {
                          userInput.skill.map((item)=>(
                        <span key={item} className="btn btn-primary me-3 mb-2">{item} <button onClick={()=>removeSkill(item)} className="text-light btn">X</button></span>
                          ))
                           }
                        
                    </div>
                    

                </div>
            </div>
        )
         case 5 : return(
            <div>
                <h1>Professional Summary</h1>
                <div className="row p-3">
                    <TextField value={userInput.summary} onChange={(e)=>setUserInput({...userInput,summary:e.target.value})} multiline rows={5} id="summary" label="Write a short summary of yourself" variant="standard" />
                    

                </div>
            </div>
        )
    }
  }

const handleAddResume = async () => {
  const { name, jobtitle, location, email, phone, github, linkedin, portfolio } = userInput.professionalData;
  const { course, college, university, year } = userInput.educationData;
  const { jobrole, company, joblocation, duration } = userInput.experience;
  const { skill, summary } = userInput;

  if (
    name && jobtitle && location &&
    email && phone && github && linkedin && portfolio &&
    course && college && university && year &&
    jobrole && company && joblocation && duration &&
    skill.length > 0 && summary
  ) {
    try {
      const result = await addResumeAPI(userInput);
      console.log(result);
      setresumeID(result.data.id)
      setIsResumeAdded(true)
      Swal.fire({
  title: "Good job!",
  text: "Resume Added Successfully!",
  icon: "success" 

});
    } catch (err) {
      console.error(err);
      alert("Error adding resume!");
    }
  } else {
    Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "Error! Resume Adding Failed!",
 
});
  }
};


  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
              <Button variant="contained" className="ms-5" onClick={handleAddResume}>Add Resume</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            {renderStepArrayContent(activeStep)}
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </>
  );
}

export default Steps;

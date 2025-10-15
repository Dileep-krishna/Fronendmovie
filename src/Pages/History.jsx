import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import { Link as RouterLink } from 'react-router-dom'  
import { deleteResumesAPI, getAllResumesAPI } from '../service/allAPI'

function History() {
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

   const getAllResumes = async () => {
     const result = await getAllResumesAPI();
     console.log(result);
     setUserInput(result?.data)
   };

   console.log(userInput);

   const deleteResume = async (id)=>{
     const result = await deleteResumesAPI(id);
     console.log(result);
     getAllResumes()
   }
   

   useEffect(()=>{
    getAllResumes()
   },[])
  return (
    <>
      <div>
        <h1 className='text-center mt-5'>Download Resume History</h1>

        {/* ✅ MUI Link with React Router */}
        <Link
          component={RouterLink}
          to="/"
          sx={{ mt: -5 }}
          className="float-end me-5"
        >
          BACK
        </Link>
        <Box component="section" className='container-fluid'>
          <div className="row mt-5">
            {userInput ?.length > 0 ?
            userInput.map((item,index)=>(
            <div className="col-md-4" key={index}>
              
              <Paper elevation={3} sx={{ my:5 , p:2, textAlign:"center"}}>
                <div className='d-flex align-items-center justify-content-center'>
                {/* <h6>Review At : <br/> 24/08/2025, 7:22:27 PM</h6> */}
                <h6>Resume Number : {index+1}</h6>
                <button onClick={()=>deleteResume(item?.id)} type='button' className='btn btn-danger'>X</button>
              </div>
              <div className='shadow p-3 mt-3'>
            <h2>{item?.professionalData.name}</h2> 
            <h6>{item?.professionalData.jobtitle}</h6> 
            <p><span>{item?.professionalData.location}   |   </span><span>{item?.professionalData.email}   |   </span><span>{item?.professionalData.phone}</span></p> 
           
            {/* <div className='d-flex gap-3 justify-content-center'>
              <Link>GITHUB</Link>
              <Link>LINKEDIN</Link>
              <Link>PORTFOLIO</Link>
            </div>  */}

            {/* <Divider sx={{ marginTop: "20px" }}>SUMMARY</Divider> 

            <p style={{ textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A numquam asperiores error ab velit quibusdam! Est sunt earum odio fugiat id. Animi in, voluptatum aperiam nisi cumque incidunt sint enim?</p>

            <Divider sx={{ marginTop: "20px" }}>Education</Divider> 

            <h4>B.Tech</h4> 
            <p>SRM COLLEGE | SRM UNIVERSITY | 2025</p>

            <Divider sx={{ marginTop: "20px" }}>Professional Experience</Divider> 

            <h4>MERN FULL STACK</h4> 
            <p>Luminar TechnoLab | Kakkanad | 6 months</p>

            <Divider sx={{ marginTop: "20px" }}>Skills</Divider> 

            <div className='d-flex flex-wrap gap-3'>
              <Button variant='outlined'>REACT</Button>
            </div> */}
            </div>
          </Paper>
            </div>
            ))
             :
            <h1>No resumes added</h1>
            }

          </div>

        </Box>
      </div>
    </>
  )
}

export default History

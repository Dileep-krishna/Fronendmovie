import React from 'react'
import { FaFileDownload } from "react-icons/fa";
import { IoDocument } from "react-icons/io5";
import { Link } from "react-router-dom";

function ResumeGenerator() {
  return (
    <>
    <div className="container mt-5">
      <h1 className='text-center'>Create A Job Winning Resume In Minutes</h1>
      <div className="row mt-5">
        <div className="col-1"></div>
        <div className="col-4 mt-5">
          <div className='shadow rounded p-5 text-center'>
            <IoDocument  className='fs-1 mb-2 text-primary'/>
            <h1>Add Your Information</h1>
            <p>Add pre-written examples for each section</p>

            <h4>Step 1</h4>
          </div>
        </div>
        <div className="col-2"></div>
        <div className="col-4 mt-5">
           <div className='shadow rounded p-5 text-center'>
            <FaFileDownload className='fs-1 mb-2 text-success' />
            <h1>Download Your Resume</h1>
            <p>Download and start applying</p>

            <h4>Step 2</h4>
          </div>
        </div>
        <div className="col-1"></div>

      </div>

      <div className='text-center mt-5 mb-5'>
        <Link to={"/form"}><button className='btn btn-primary'>LET'S START</button></Link> 
      </div>
    </div>
      
    </>
  )
}

export default ResumeGenerator

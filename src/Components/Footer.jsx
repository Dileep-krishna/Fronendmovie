import { height } from '@mui/system'
import React from 'react'
import { IoMdMail } from "react-icons/io";
import { CiMobile3 } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div style={{width:"100%", height:"300px"}} className='bg-primary text-center'>
        <h3 className='text-white pt-4'>Contact Us</h3>
        <p style={{fontSize:"20px"}} className='text-white'><IoMdMail /> rbuilder@gmail.com</p>
        <p style={{fontSize:"20px"}} className='text-white'><CiMobile3 /> 5267945831</p>
        <h4 className='text-white'>Connect With US</h4>
        <FaWhatsapp className="mx-3 text-white mt-1" size={30}/><FaInstagram className="mx-3 text-white mt-1" size={30}/><FaLinkedin className="mx-3 text-white mt-1" size={30}/>
        <p className='mt-3 text-white'>Designed And Build With  <span className='text-danger'><FaHeart /></span>  Using REACT</p>
      </div>
    </>
  )
}

export default Footer

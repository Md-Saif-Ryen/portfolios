import React, {useContext} from "react"
import './menuBar.css';
import {FaAirbnb} from "react-icons/fa";
import {FaHome} from "react-icons/fa";
import {GrContactInfo} from "react-icons/gr";
import {GrUserExpert} from "react-icons/gr";
import {VscFeedback} from "react-icons/vsc";
import {GrServices} from "react-icons/gr";
import {GrUserWorker} from "react-icons/gr";
import {AiOutlineFolderOpen} from "react-icons/ai";
import { useState } from 'react';
import { themeContext } from "../../Context";

const menubar = () => {
    // const [ActiveNav, setActiveNav] = useState("#");
    // const theme = useContext(themeContext);
    // const darkMode = theme.state.darkMode;
  return (
    // style={{background: darkMode?'rgb(255,255,255,0.4)': ''}}
  //  <section>
  //   <div className="menu" >
  //    <nav >
  //    <a href="#" onClick={() => setActiveNav('#')} className={ActiveNav==='#' ? 'active': ''}><FaHome/></a>
  //    <a href="#services" onClick={() => setActiveNav('#services')} className={ActiveNav==='#services' ? 'active': ''}> <GrServices/></a>
  //    <a href="#experience" onClick={() => setActiveNav('#experience')} className={ActiveNav==='#experience' ? 'active': ''}> <GrUserExpert/></a>
  //    <a href="#works" onClick={() => setActiveNav('#works')} className={ActiveNav==='#works' ? 'active': ''}> <GrUserWorker/></a>
  //    <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={ActiveNav==='#portfolio' ? 'active': ''}> <AiOutlineFolderOpen/></a>
  //    <a href="#testimonial" onClick={() => setActiveNav('#testimonial')} className={ActiveNav==='#testimonial' ? 'active': ''}> <VscFeedback/></a>
  //    <a href="#contact" onClick={() => setActiveNav('#contact')} className={ActiveNav==='#contact' ? 'active': ''}> <GrContactInfo/></a>    
  //   </nav>
  //  </div>
  //  </section>
  <div className="menu" >
  <nav >
  <a href="#" ><FaHome/></a>
  <a href="#services" > <GrServices/></a>
  <a href="#experience"> <GrUserExpert/></a>
  <a href="#works"> <GrUserWorker/></a>
  <a href="#portfolio" > <AiOutlineFolderOpen/></a>
  <a href="#testimonial" > <VscFeedback/></a>
  <a href="#contact"> <GrContactInfo/></a>    
 </nav>
</div>
  )
}

export default menubar
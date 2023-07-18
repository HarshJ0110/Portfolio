import "./FooterStyles.css"
import { FaHome, FaPhone, FaMailBulk, FaLinkedin, FaGithub } from "react-icons/fa";
import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
        <div className="left_right">
            <div class="location_mail">
               <FaHome size={25} style={{color: "#fff", marginRigth: "2rem"}}/>
                <div>
                    <h4>F-103 Shilalek Apt, Surat, Gujarat</h4>
                    <h4>India</h4>
                </div>
            </div>
            <div className="phone">
                <FaPhone size={20} style={{color: "#fff", marginRigth: "2rem"}}/>
                <div>
                    <h4>8000197642</h4>
                </div>
            </div>
        </div>
        <div className="left_right">
            <div className="location_mail">
                <FaMailBulk size={20} style={{color: "#fff", marginRigth: "1rem"}}/>
                <div>
                    <h4>harshjain0461@gmail.com</h4>
                </div>
            </div>
            <div className="social">
                <Link to="https://github.com/HarshJ0110">
                <h4><FaGithub size={30} style={{color: "#fff", marginRigth: "1rem"}} /></h4>
                </Link>
                <Link to="https://www.linkedin.com/in/harsh-jain-882214243/">
                <h4><FaLinkedin size={30} style={{color: "#fff", marginRigth: "1rem"}} /></h4>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer
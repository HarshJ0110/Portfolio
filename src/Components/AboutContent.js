import "./AboutContentStyles.css"
import React from 'react'


const AboutContent = () => {
    return (
        <div className="about">
            <div className="left">
                <h1 style={{marginTop: "50px"}}>Who Am I?</h1>
                <p style={{marginBottom: "80px" , marginTop: "50px", lineHeight: "40px"}}>
                    Im a full stack developer. I love to create responsive & secure websites.
                </p>
                
            </div>
            <div className="right">
                <h1 style={{marginBottom: "25px"}}>Skills</h1>
                <div className="skill">
                <p>
                    Html
                </p>
                <p>
                    Css
                </p>
                <p>
                    Javascript  
                </p>
                <p>
                    Java
                </p>
                <p>
                    React JS
                </p>
                <p>
                    Node JS
                </p>
                <p>
                    Express JS
                </p>
                <p>
                    ejs
                </p>
                <p>
                    Mongodb
                </p>
                <p>
                    Git
                </p>
                <p>
                    Github
                </p>
                <p>
                    Rest API
                </p>
                </div>
            </div>
        </div>
    )
}

export default AboutContent
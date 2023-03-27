import React from "react";
import "./Header.css";
import ProfileImg from "../Images/profile.JPG"
import EmailImg from "../Images/LetterI.png"
import LinkedinImg from "../Images/linkedin.png"

export default function Header() {
    return(
        <div>
            <img className="Pimg" src={ProfileImg}/>
            <div className="sxva">
                <h1>Buba Gurjidze</h1>
                <h3>Frontend Developer</h3>
                <div className="Buttons">
                    <button className="Email">
                        <img className="img1" src={EmailImg}/> Email</button>
                    <button className="Linkedin">
                        <img className="img2" src={LinkedinImg}/> Linkedin</button>
                </div>
            </div>
        </div>
    )
}
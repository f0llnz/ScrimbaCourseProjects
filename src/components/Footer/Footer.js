import "./Footer.css"
import TwitterImg from "../Images/TwitterI.png"
import FacebookImg from "../Images/FbI.png"
import InstagramImg from "../Images/IGI.png"
import GirhubImg from "../Images/GitI.png"

export default function Footer() {
    return(
        <div className="Footer">
            <div className="Icons">
                <img className="IconsM" src={TwitterImg}/>
                <img className="IconsM" src={FacebookImg}/>
                <img className="IconsM" src={InstagramImg}/>
                <img className="IconsM" src={GirhubImg}/>
            </div>
            <br></br><br></br><br></br>
        </div>
    )
}
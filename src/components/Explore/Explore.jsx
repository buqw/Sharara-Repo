import { useState } from "react"
import Footer from "../Public-Components/Footer";
import Social from "./Social";
import News from "./News";

export default function Explore(props){
    const [section,setSection] = useState("social");

    return(
        <div id="explore-body" className={props.dark ? 'darkModeBody' : 'lightModeBody'}>
            <header>
                <p id="title-explore" className={props.dark ? 'darkModeText' : 'lightModeText'}>Explore the world</p>
                <div id="sec-btns-div">
                    <button onClick={()=>{setSection("social")}} id={section === "social" ? "activeBtn":""} className = {props.dark ? 'darkMode sec-btns':'lightMode sec-btns'}><p>Social</p></button>
                    <button onClick={()=>{setSection("news")}} id={section === "news" ? "activeBtn":""} className = {props.dark ? 'darkMode sec-btns':'lightMode sec-btns'}><p>News</p></button>
                </div>
            </header>
            {section === "social" ? <Social />:<News /> }

            <Footer activeBtn={4} dark={props.dark} />
        </div>
    )
}
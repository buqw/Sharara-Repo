import { AiFillHome } from "react-icons/ai";
import { IoMdSwap } from "react-icons/io";
import { MdExplore } from "react-icons/md";
import { GrHistory } from "react-icons/gr";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer(props){
    const [active, setActive] = useState(props.activeBtn);

    return(
        
        <>

            <footer className={props.dark ? 'darkMode' : 'lightMode'}>
                <div>
                    <button className={props.activeBtn === 1 ? "activeBtn" : ""} onClick={()=>setActive(1)}><Link to={"/"} className="histBtn" ><AiFillHome/></Link></button>
                    <button className={props.activeBtn === 2 ? "activeBtn" : ""} onClick={()=>setActive(2)}><IoMdSwap/></button>
                    <button className={props.activeBtn === 3 ? "activeBtn" : ""} onClick={()=>setActive(3)}><Link to={"/History"} className="histBtn" ><GrHistory/></Link></button>
                    <button className={props.activeBtn === 4 ? "activeBtn" : ""} onClick={()=>setActive(4)}><MdExplore/></button>
                </div>

            </footer>

        

        </>
    )
}
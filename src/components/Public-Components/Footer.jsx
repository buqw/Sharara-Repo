import { AiFillHome } from "react-icons/ai";
import { IoMdSwap } from "react-icons/io";
import { MdExplore } from "react-icons/md";
import { GrHistory } from "react-icons/gr";
import { useState } from "react";

export default function Footer(props){
    const [active, setActive] = useState(1);

    return(
        
        <>

            <footer className={props.dark ? 'darkMode' : 'lightMode'}>
                <div>
                    <button className={active === 1 ? "activeBtn" : ""} onClick={()=>setActive(1)}><AiFillHome/></button>
                    <button className={active === 2 ? "activeBtn" : ""} onClick={()=>setActive(2)}><IoMdSwap/></button>
                    <button className={active === 3 ? "activeBtn" : ""} onClick={()=>setActive(3)}><GrHistory/></button>
                    <button className={active === 4 ? "activeBtn" : ""} onClick={()=>setActive(4)}><MdExplore/></button>
                </div>

            </footer>

        

        </>
    )
}
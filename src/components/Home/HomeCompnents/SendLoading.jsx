import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaCheckCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function SendLoading(props){
    const [done,setDone] = useState(false)

    useEffect( () =>{
        const timer = setTimeout( () => {
            setDone(true);
        },5000);
        return () => clearTimeout(timer);
    },[]) 
    return(
        <>
        {!done ? 
        ( 
        <div>
            <div id="sendLoadingIconDiv" >
                <AiOutlineLoading3Quarters className="rotatingIcon"/>
            </div>
            <div id="sendLoadingMessage">
                <p className={props.dark ? 'darkModeText' : 'lightModeText'}>Wait a moment</p>
            </div>
        </div>
        ) 
        : 
        (
        <div id="loadingFinalMessage">
            <div id="sendLoadingIconDiv">
                <FaCheckCircle/>
            </div>
             <div id="sendLoadingMessage">
                <p className={props.dark ? 'darkModeText' : 'lightModeText'}>Done</p>
            </div>
            <Link to='/' buyAmount={props.buyAmount} className="linkBtns"><p className={props.dark ? 'darkModeText' : 'lightModeText'}>Back To Home</p></Link>
        </div>)}   

        </>
    )
}
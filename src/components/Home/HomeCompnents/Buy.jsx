import { Link } from "react-router-dom";
import { TbLetterX } from "react-icons/tb";
import { FaDollarSign } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa";
import { RiVisaFill } from "react-icons/ri";
import { useState } from "react";


export default function Buy(props){
   const handleChange = (event) => {
    props.changeValue(event.target.value);
   };
  
    return(
        <>
            <div className="exitIcon" >
            <Link to='/' className={props.dark ? 'darkModeText' : 'lightModeText'}><TbLetterX/></Link>
            </div>

            <div id="buyIcon">
                <FaDollarSign/>
                <p className={props.dark ? 'darkModeText' : 'lightModeText'}>Buy</p>
            </div>

            <div id="buyCont">
                <input value={props.buyAmount} onChange={handleChange} className={props.dark ? 'darkMode' : 'lightMode'} type="number" placeholder="USDT Amount"/>
                <div id="buyPayWays">
                    <Link to='../Send/Loading' className={props.dark ? 'darkMode buyApplePayLink' : 'lightMode buyApplePayLink'}><button className={props.dark ? 'darkMode buyApplePayButton' : 'lightMode buyApplePayButton'}><FaApplePay/></button></Link>
                    <Link to='../Send/Loading' className={props.dark ? 'darkMode buyApplePayLink' : 'lightMode buyApplePayLink'}><button className={props.dark ? 'darkMode buyApplePayButton' : 'lightMode buyApplePayButton'}><RiVisaFill/></button></Link>
                </div>
           </div>
            {console.log(props.buyAmount)}
        </>

    )
}
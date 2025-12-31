import { FaApplePay, FaDollarSign } from "react-icons/fa";
import { RiVisaFill } from "react-icons/ri";
import { TbLetterX } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Buy(props){
    const [amountWanted, setAmoutWanted] = useState(null);
    const [valid,setValid] = useState(false);
    const [empty,setEmpty] = useState(true);

    const handleChange = (event) => {
        const value = event.target.value;
        const num = Number(value);

        setAmoutWanted(value);

        if(value === ""){
            setEmpty(true);
            setValid(false);
            return
        }else{
            setEmpty(false);
        }

        if(Number.isInteger(num) && num > 1 && num <10000){
            setValid(true)
        }else{
            setValid(false);
        }
    };
    const buyButton = () =>{
        if(!valid){
            return
        }
        props.setUsdtAmount(prev => prev + Number(amountWanted));
        props.setWalletAmount(prev => prev + Number(amountWanted))
        const time = new Date();
        props.setRecentLog(prev => [...prev, {
            process: `Buying ${amountWanted} USDT Successfully`,
            amount: amountWanted,
            date: time.toLocaleDateString("en-GB",{
                year:"2-digit",
                month:"2-digit",
                day:"2-digit",
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
            })}])}
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
                <input value={amountWanted} onChange={handleChange} className={props.dark ? 'darkMode' : 'lightMode'} placeholder="USDT Amount"/>
                <div id="buyAmountBtns">
                    <button onClick={()=>{setAmoutWanted(50); setValid(true)} } className={props.dark ? 'darkMode' : 'lightMode'}>$50</button>
                    <button onClick={()=>{setAmoutWanted(200); setValid(true)} } className={props.dark ? 'darkMode' : 'lightMode'}>$200</button>
                    <button onClick={()=>{setAmoutWanted(1000); setValid(true)} } className={props.dark ? 'darkMode' : 'lightMode'}>$1000</button>
                </div>
                {!valid && !empty ? (<p className="redText">Invalid number, enter a number 1-10000</p>) : null}
                <div id="buyPayWays">
                    <Link to='../Send/Loading' className={props.dark ? 'darkMode buyApplePayLink' : 'lightMode buyApplePayLink'}><button disabled={valid ? false: true} onClick={buyButton} className={props.dark ? 'darkMode buyApplePayButton' : 'lightMode buyApplePayButton'}><FaApplePay/></button></Link>
                    <Link to='../Send/Loading' className={props.dark ? 'darkMode buyApplePayLink' : 'lightMode buyApplePayLink'}><button disabled={valid ? false: true} onClick={buyButton} className={props.dark ? 'darkMode buyApplePayButton' : 'lightMode buyApplePayButton'}><RiVisaFill/></button></Link>
                </div>
           </div>
            {console.log(props.buyAmount)}
        </>

    )
}

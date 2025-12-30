import { FaApplePay, FaDollarSign } from "react-icons/fa";
import { RiVisaFill } from "react-icons/ri";
import { TbLetterX } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Buy(props){
    const [amountWanted, setAmoutWanted] = useState(0);

    const handleChange = (event) => {
        setAmoutWanted(event.target.value);
    };

    const buyButton = () =>{
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
            })
        }
        ] )
    }
  
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
                <input value={amountWanted} onChange={handleChange} className={props.dark ? 'darkMode' : 'lightMode'} type="number" placeholder="USDT Amount"/>
                <div id="buyPayWays">
                    <Link to='../Send/Loading' className={props.dark ? 'darkMode buyApplePayLink' : 'lightMode buyApplePayLink'}><button onClick={buyButton} className={props.dark ? 'darkMode buyApplePayButton' : 'lightMode buyApplePayButton'}><FaApplePay/></button></Link>
                    <Link to='../Send/Loading' className={props.dark ? 'darkMode buyApplePayLink' : 'lightMode buyApplePayLink'}><button onClick={buyButton} className={props.dark ? 'darkMode buyApplePayButton' : 'lightMode buyApplePayButton'}><RiVisaFill/></button></Link>
                </div>
           </div>
            {console.log(props.buyAmount)}
        </>

    )
}

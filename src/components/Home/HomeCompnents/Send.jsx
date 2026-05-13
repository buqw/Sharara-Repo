import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { IoIosSend } from "react-icons/io";
import { TbLetterX } from "react-icons/tb";
import HomeCoinTemp from "./HomeCoinTemp"
import BTC from './btc logo.png'
import SOL from './solana logo.jpg'
import USDT from './usdt.png'
import { use, useState } from "react";



export default function Send(props){
    const navigate = useNavigate();
    const [activeIndex , setActive] =useState(null)
    const [message, setMessage] = useState("")
    const [amount, setAmount] = useState(0);
    const handleChange = (e) => {
        setAmount(e.target.value)
    }
    const handleSend = (e) =>{
        e.preventDefault();
        if(!activeIndex || amount <= 0){
            setMessage('choose token and enter an amount')
            return
        }
        if(activeIndex===1 && props.btcAmount*100000 >= amount){
            props.setBtcAmount((prev) => (prev*100000-amount) / 100000)
            navigate("/Send/Loading")
        }
        if(activeIndex ===2 && props.solAmount*100 >= amount){
            props.setSolAmount((prev) =>Number((prev*100-amount)/100).toFixed(1) )
            navigate("/Send/Loading")
        }
        if(activeIndex ===3 && props.usdtAmount >= amount){
            props.setUsdtAmount((prev) => prev-amount)
            navigate("/Send/Loading")
        }
        const time = new Date();
        props.setRecentLog(prev => [...prev, {
            process: `Sending $${amount} Successfully`,
            amount: amount,
            date: time.toLocaleDateString("en-GB",{
                year:"2-digit",
                month:"2-digit",
                day:"2-digit",
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
            })}])
        
    }
    return(
        <>
        <div className="exitIcon" >
            <Link to='/' className={props.dark ? 'darkModeText' : 'lightModeText'}><TbLetterX/></Link>
        </div>
        <div className="sendLogo">
            <IoIosSend/>
            <div>
                 <p className={props.dark ? 'darkModeText' : 'lightModeText'}>Sending money to another wallet</p>
            </div>
        </div>
        <form id="sendForm" action="">
            <label htmlFor="selectToken"  className={props.dark ? 'darkModeText' : 'lightModeText'}>Select Token</label>
            {props.btcAmount !== 0 ? 
                <HomeCoinTemp onClick={()=> setActive(1)} activeIndex ={activeIndex=== 1} dark = {props.dark} logo={BTC} coinName='BTC' quant={props.btcAmount} value={`${props.btcAmount*100000}`} dailyChange= '+20%' profit={true}></HomeCoinTemp>
                :null
            }
            {props.solAmount !== 0 ? 
                <HomeCoinTemp onClick={()=> setActive(2)} activeIndex ={activeIndex === 2} dark = {props.dark} logo={SOL} coinName='Solana' quant={props.solAmount} value={`${(props.solAmount*100).toFixed(2)}`} dailyChange= '-10%' profit={false} ></HomeCoinTemp>
            :null
            }
            {props.usdtAmount >0 ?
                <HomeCoinTemp onClick={()=> setActive(3)} activeIndex ={activeIndex === 3} logo = {USDT} coinName={"USDT"} quant={`${props.usdtAmount}`} value={`${props.usdtAmount}`} dark ={props.dark}/>    
            :null
            }
            <label  className={props.dark ? 'darkModeText' : 'lightModeText'} htmlFor="sendAmount">Enter the amount</label>
            <input value={amount} onChange={handleChange} className={props.dark ? 'darkMode' : 'lightMode'} type="number" placeholder="By $" id="sendAmount"/>
            <label className={props.dark ? 'darkModeText' : 'lightModeText'} htmlFor="sendWalletAddress">Enter the wallet address</label>
            <input className={props.dark ? 'darkMode' : 'lightMode'} type="text" placeholder="Case sense" id="sendWalletAddress"/>
            <p id="wrnmsg">{message}</p>
            <button onClick={handleSend} className="sendButton" to='/Send/Loading'><p className={props.dark ? 'darkModeText' : 'lightModeText'}>Send</p></button>

        </form>
        
        </>
    )
}

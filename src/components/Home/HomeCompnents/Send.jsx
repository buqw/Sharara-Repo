import { Link } from "react-router-dom"
import { IoIosSend } from "react-icons/io";
import { TbLetterX } from "react-icons/tb";
import HomeCoinTemp from "./HomeCoinTemp"
import BTC from './btc logo.png'
import SOL from './solana logo.jpg'
import { useState } from "react";



export default function Send(props){

    const [activeIndex , setActive] =useState(null)

    return(
        <>
        <div className="exitIcon" >
            <Link to='/' className={props.dark ? 'darkModeText' : 'lightModeText'}><TbLetterX/></Link>
        </div>
        <div id="sendLogo">
            <IoIosSend/>
            <div>
                 <p className={props.dark ? 'darkModeText' : 'lightModeText'}>Sending money to another wallet</p>
            </div>
        </div>
        <form id="sendForm" action="">
            <label htmlFor="selectToken"  className={props.dark ? 'darkModeText' : 'lightModeText'}>Select Token</label>
            <HomeCoinTemp onClick={()=> setActive(1)} activeIndex ={activeIndex=== 1} dark = {props.dark} logo={BTC} coinName='BTC' quant='0.00001' value='$120' dailyChange= '+20%' profit={true}></HomeCoinTemp>
            <HomeCoinTemp onClick={()=> setActive(2)} activeIndex ={activeIndex === 2} dark = {props.dark} logo={SOL} coinName='Solana' quant='0.5 Sol' value='$100' dailyChange= '-10%' profit={false} ></HomeCoinTemp>
            <label className={props.dark ? 'darkModeText' : 'lightModeText'} htmlFor="sendAmount">Enter the amount</label>
            <input className={props.dark ? 'darkMode' : 'lightMode'} type="number" placeholder="By $" id="sendAmount"/>
            <label className={props.dark ? 'darkModeText' : 'lightModeText'} htmlFor="sendWalletAddress">Enter the wallet address</label>
            <input className={props.dark ? 'darkMode' : 'lightMode'} type="text" placeholder="Case sense" id="sendWalletAddress"/>
        
            <Link className="sendButton" to='/Send/Loading'><p className={props.dark ? 'darkModeText' : 'lightModeText'}>Send</p></Link>
        
        </form>
        
        
        </>
    )
}

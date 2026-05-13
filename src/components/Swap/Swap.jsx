import Footer from "../Public-Components/Footer"
import { IoMdSwap } from "react-icons/io";
import { useState} from "react";
import { useNavigate } from "react-router-dom";

export default function Swap(props){
    const navigate = useNavigate();
    const [ownedToken,setOwnedToken] = useState("BTC");
    const [wantedToken,setWantedToken] = useState("USDT");
    const [amount,setAmount] = useState("");
    const [message,setMessage] = useState("")
    const handleChange=(e) =>{
        setAmount(e.target.value)
    }
    const ownedHandle = (e)=>{
        setOwnedToken(e.target.value)
    }
    const wantedHandle = (e)=>{
        setWantedToken(e.target.value)
    }
    const rates = {
        BTC:100000,
        SOL:100,
        USDT:1
    }

    const getOwnedBalance = () => {
        if (ownedToken === "BTC") return props.btcAmount;
        if (ownedToken === "SOL") return props.solAmount;
        if (ownedToken === "USDT") return props.usdtAmount;
        return 0;
    };

    const handleClick = (e)=>{
        e.preventDefault();
        const amt = Number(amount)
        if(!amt || amt<=0){
            setMessage("Enter a valid amount")
            return
        }
        if(wantedToken === ownedToken){
            setMessage("Can't swap same token")
            return
        }
        if(amt > getOwnedBalance()){
            setMessage(`Not enough ${ownedToken}`)
            return
        }

        const inUsd = amt*rates[ownedToken];
        const received = inUsd/rates[wantedToken];

        if (ownedToken === "BTC") props.setBtcAmount(prev => prev - amt)
        if (ownedToken === "SOL") props.setSolAmount(prev => prev - amt)
        if (ownedToken === "USDT") props.setUsdtAmount(prev => prev - amt)

        if (wantedToken === "BTC") props.setBtcAmount(prev => prev + received);
        if (wantedToken === "SOL") props.setSolAmount(prev => prev + received);
        if (wantedToken === "USDT") props.setUsdtAmount(prev => prev + received);
        
        const time = new Date();
        props.setRecentLog(prev => [...prev, {
            process: ` ${amt} ${ownedToken} swapped Successfully`,
            amount: amt + ` ${ownedToken}`,
            date: time.toLocaleDateString("en-GB",{
                year:"2-digit",
                month:"2-digit",
                day:"2-digit",
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
            })}])
        setMessage("Swap Successful.")
        navigate("/Send/Loading")
    }
    return(
        <div id="swap-body" className={props.dark ? 'darkModeBody' : 'lightModeBody'}>
            <div className="sendLogo">
                <IoMdSwap/>
                <div>
                    <p className={props.dark ? 'darkModeText' : 'lightModeText'}>Swap Tokens</p>
                </div>
            </div>

            <div id="swap-cont">
                    <p className={props.dark ? 'darkModeText' : 'lightModeText'}>Choose Token swap</p>                    
                    <select value={ownedToken} onChange={ownedHandle} className={props.dark ? 'darkMode' : 'lightMode'} name="" id="">
                        <option value="BTC">Bitcoin ({Number(props.btcAmount).toFixed(3)})</option>
                        <option value="SOL">Solana ({props.solAmount})</option>
                        <option value="USDT">USDT ({props.usdtAmount})</option>
                    </select>
                    <p className={props.dark ? 'darkModeText' : 'lightModeText'}>To</p>
                    <select value={wantedToken} onChange={wantedHandle} className={props.dark ? 'darkMode' : 'lightMode'} name="" id="">
                        <option value="USDT">USDT </option>                        
                        <option value="BTC">Bitcoin</option>
                        <option value="SOL">Solana</option>
                    </select>
                    <p>Enter the amount of {ownedToken}</p>
                    <input min={1} onChange={handleChange} value={amount} placeholder={`Amount of ${ownedToken}`} className={props.dark ? 'darkMode' : 'lightMode'} type="number" />
                    <p>{message}</p>
                    <button onClick={handleClick}><p className={props.dark ? 'darkModeText' : 'lightModeText'}>Swap</p></button>
            </div>

            <Footer activeBtn={2} dark={props.dark}/>
        </div>
    )
}
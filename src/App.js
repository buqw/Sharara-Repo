import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useState , useEffect} from "react";
import './App.css';
import Home from './components/Home/Home'
import Send from './components/Home/HomeCompnents/Send'
import SendLoading from './components/Home/HomeCompnents/SendLoading'
import Receive from './components/Home/HomeCompnents/Receive'
import Buy from "./components/Home/HomeCompnents/Buy";
import Recent from "./components/Recent/Recent";
import Swap from "./components/Swap/Swap";
import Profile from "./components/Home/HomeCompnents/Profile";
import avatar from "./components/Home/HomeCompnents/blank-avatar.webp"

function App() {
  const [dark , changeMode] = useState(()=>{
    const saved = localStorage.getItem("mode")
    if (!saved || saved === "undefined") {
      return 1;
    }

    return JSON.parse(saved);
  })

  useEffect(()=>{
    localStorage.setItem("mode",JSON.stringify(dark))
  },[dark])
  

  // Prices
  const btcPrice = 100000;
  const solPrice = 100;
  // Wallet
  const [usdtAmount, setUsdtAmount] = useState(()=>{
    const saved = localStorage.getItem("usdtAmount");
    if (!saved || saved === "undefined") {
      return 0;
    }

    return JSON.parse(saved);
  });

  const [btcAmount, setBtcAmount] = useState(()=>{
    const saved = localStorage.getItem("btcAmount");
    if (!saved || saved === "undefined") {
      return 0.1;
    }

    return JSON.parse(saved);
  })

  const [solAmount, setSolAmount] = useState(()=>{
    const saved = localStorage.getItem("solAmount");
    if (!saved || saved === "undefined") {
      return 20;
    }

    return JSON.parse(saved);
  })

  const [walletAmount, setWalletAmount] = useState()
  useEffect(()=>{
    setWalletAmount( btcAmount*btcPrice + solAmount*solPrice + usdtAmount)

  },[btcAmount,usdtAmount,solAmount])

  useEffect(()=>{
    localStorage.setItem("usdtAmount",JSON.stringify(usdtAmount))
  },[usdtAmount]);
  useEffect(()=>{
    localStorage.setItem("btcAmount",JSON.stringify(btcAmount))
  },[btcAmount]);
  useEffect(()=>{
    localStorage.setItem("solAmount",JSON.stringify(solAmount))
  },[solAmount]);
  
  // logs
  const [recentLog,setRecentLog] = useState(()=>{
    const saved = localStorage.getItem("recentLog");
    return saved ? JSON.parse(saved): [];
  })
  useEffect(()=>{
    localStorage.setItem("recentLog",JSON.stringify(recentLog));
  },[recentLog])

  // User data
  const [currAvatar, setCurrAvatar] = useState(avatar)
  const [username,setUsername] = useState('Sharara_User')
  const [userEmail] = useState("HelloWorld@example.com")
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Home btcAmount={btcAmount} solAmount={solAmount} usdtAmount={usdtAmount} walletAmount={walletAmount} setWalletAmount={setWalletAmount} btcPrice={btcPrice} solPrice={solPrice}  username={username} avatar={currAvatar} dark={dark} changeMode={changeMode}/>}/>
        <Route path="/Home/Send" element ={<Send setRecentLog={setRecentLog} setUsdtAmount={setUsdtAmount} setBtcAmount={setBtcAmount} setSolAmount={setSolAmount} btcAmount={btcAmount} solAmount={solAmount} usdtAmount={usdtAmount} dark={dark}/>}/>
        <Route path="/Home/Receive" element={<Receive dark={dark}/>}/>
        <Route path="/Home/Buy" element={<Buy setRecentLog={setRecentLog} usdtAmount={usdtAmount} setUsdtAmount={setUsdtAmount} setWalletAmount={setWalletAmount} dark={dark}/>}/>
        <Route path="/Profile" element={<Profile userEmail={userEmail} username={username} setUsername={setUsername} avatar={currAvatar} setAvatar={setCurrAvatar} dark={dark}/>}/>
        <Route path="/Send/Loading" element={<SendLoading dark={dark}/>}/>
        <Route path="/Swap" element={<Swap setRecentLog={setRecentLog} setUsdtAmount={setUsdtAmount} setBtcAmount={setBtcAmount} setSolAmount={setSolAmount} btcAmount={btcAmount} solAmount={solAmount} usdtAmount={usdtAmount} dark={dark}/>}/>
        <Route path="/History" element={<Recent recentLog={recentLog} dark={dark}/>}/>
      </Routes>

     

  </Router>

  );
}

export default App;

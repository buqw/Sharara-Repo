import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useState } from "react";
import './App.css';
import Home from './components/Home/Home'
import Send from './components/Home/HomeCompnents/Send'
import SendLoading from './components/Home/HomeCompnents/SendLoading'
import Receive from './components/Home/HomeCompnents/Receive'
import Buy from "./components/Home/HomeCompnents/Buy";
import Recent from "./components/Recent/Recent";
import Profile from "./components/Home/HomeCompnents/Profile";
import avatar from "./components/Home/HomeCompnents/blank-avatar.webp"

function App() {
  const [dark , changeMode] = useState(true)
  const [usdtAmount, setUdstAmount] = useState(0);
  const [walletAmount, setWalletAmount] = useState(220 + usdtAmount)
  const [recentLog,setRecentLog] = useState([])
  const [currAvatar, setCurrAvatar] = useState(avatar)
  const [username,setUsername] = useState('Sharara_User')
  const [userEmail] = useState("HelloWorld@example.com")

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home usdtAmount={usdtAmount} walletAmount={walletAmount} setWalletAmount={setWalletAmount} username={username} avatar={currAvatar} dark={dark} changeMode={changeMode}/>}/>
        <Route path="/Home/Send" element ={<Send dark={dark}/>}/>
        <Route path="/Home/Receive" element={<Receive dark={dark}/>}/>
        <Route path="/Home/Buy" element={<Buy setRecentLog={setRecentLog} usdtAmount={usdtAmount} setUsdtAmount={setUdstAmount} setWalletAmount={setWalletAmount} dark={dark}/>}/>
        <Route path="/Profile" element={<Profile userEmail={userEmail} username={username} setUsername={setUsername} avatar={currAvatar} setAvatar={setCurrAvatar} dark={dark}/>}/>
        <Route path="/Send/Loading" element={<SendLoading dark={dark}/>}/>
        <Route path="/History" element={<Recent recentLog={recentLog} dark={dark}/>}/>
      </Routes>

     

  </Router>

  );
}

export default App;

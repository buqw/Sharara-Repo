import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { useState } from "react";
import './App.css';
import Home from './components/Home/Home'
import Send from './components/Home/HomeCompnents/Send'
import SendLoading from './components/Home/HomeCompnents/SendLoading'
import Swap from './components/Swap/Swap'
import Receive from './components/Home/HomeCompnents/Receive'
import Buy from "./components/Home/HomeCompnents/Buy";


function App() {
  const [dark , changeMode] = useState(true)
  const [buyAmount , changeValue] = useState(0)
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home buyAmount={buyAmount} walletAmount={220} dark={dark} changeMode={changeMode}/>}/>
        <Route path="/Home/Send" element ={<Send dark={dark}/>}/>
        <Route path="/Home/Swap" element={<Swap dark={dark}/>}/>
        <Route path="/Send/Loading" element={<SendLoading dark={dark}/>}/>
        <Route path="/Home/Receive" element={<Receive dark={dark}/>}/>
        <Route path="/Home/Buy" element={<Buy buyAmount={buyAmount} changeValue={changeValue} dark={dark}/>}/>
      </Routes>

     

  </Router>

  );
}

export default App;

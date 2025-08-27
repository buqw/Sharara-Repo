import {Link} from "react-router-dom";
import { FaQrcode } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { IoMdSwap } from "react-icons/io";
import { FaDollarSign } from "react-icons/fa";
import { GrAnalytics } from "react-icons/gr";


export default function HomeBtns(props){
    return(
        <>
            <div id='homeButtons'>               
                    <Link to='/Home/Send' className={props.dark ? 'darkMode' : 'lightMode'}> <div><IoIosSend id='SendIcon'/><p>Send</p></div></Link>
                    <Link to='/Home/Receive' className={props.dark ? 'darkMode' : 'lightMode'}> <div><FaQrcode/><p>Receive</p></div></Link>
                    <Link to='/Home/Buy' className={props.dark ? 'darkMode' : 'lightMode'}> <div><FaDollarSign/><p>Buy</p></div></Link>
                    <Link to='/Home/Swap' className={props.dark ? 'darkMode' : 'lightMode'}> <div><IoMdSwap/><p>Swap</p></div></Link>
                    <Link to='/Home/Analysis' className={props.dark ? 'darkMode' : 'lightMode'}> <div><GrAnalytics/><p>Analysis</p></div></Link>
            </div>
         </>       
    )
}
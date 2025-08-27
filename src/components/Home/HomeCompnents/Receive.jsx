import { useState } from "react";
import { FaEthereum } from "react-icons/fa6";
import { FiCopy } from "react-icons/fi";
import { SiSolana } from "react-icons/si";
import { TbLetterX } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function Receive(props){
    const [copied,setCopied] = useState(false)

    const handleCopy = (network) => {
        if(network==='SOL'){navigator.clipboard.writeText('WR2KLD3K9KFKXKLERUSJRLKWO3KRF43HD9J3X')
            setCopied(true)
        }
        else if(network==='ETH'){navigator.clipboard.writeText('NMTJ3JHC9M4PBBN2DXLX04MC8RBND038DH1RC')
            setCopied(true)
        }

        setTimeout( () => {
        setCopied(false);
        },3000)
    }



    return(
        <>
            <div className="exitIcon" >
            <Link to='/' className={props.dark ? 'darkModeText' : 'lightModeText'}><TbLetterX/></Link>
             </div>
            <header id="receiveHeader">
                <p className={props.dark ? 'darkModeText' : 'lightModeText'}>Your Networks</p>
            </header>

            <div id="recCont">


                <div className={props.dark ? 'darkMode recNetwork' : 'lightMode recNetwork'}>
                    <div className="recNetworkInfo">
                        <SiSolana className="recNetworkIcon"/>
                        <div className={props.dark ? 'darkModeText recNameNAddress' : 'lightModeText recNameNAddress'}>
                            <p className="recNetworkName">Solana</p>
                            <p className="recAddress">WR...J3X</p>
                        </div> 
                    </div>
                    <div className="recCopyAddress">
                        <button onClick={() => {handleCopy('SOL')} } className={props.dark ? 'darkModeText' : 'lightModeText'}><FiCopy/></button>
                    </div>
                </div>



                <div className={props.dark ? 'darkMode recNetwork' : 'lightMode recNetwork'}>
                    <div className="recNetworkInfo">
                        <FaEthereum className="recNetworkIcon"/>
                        <div className={props.dark ? 'darkModeText recNameNAddress' : 'lightModeText recNameNAddress'}>
                            <p className="recNetworkName">Ethereum</p>
                            <p className="recAddress">NM...1RC</p>
                        </div> 
                    </div>
                    <div className="recCopyAddress">
                        <button onClick={()=>{handleCopy('ETH')}} className={props.dark ? 'darkModeText' : 'lightModeText'}><FiCopy/></button>
                    </div>
                </div>



                {copied && (
                    <div className={props.dark ? 'darkMode' : 'lightMode'} id="recAddressCopiedMessage">
                        <p>Wallet address copied.</p>
                    </div>



                )}





            </div>
        
        
        
        </>
    )
}

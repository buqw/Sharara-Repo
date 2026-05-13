import BTC from './btc logo.png'
import HomeCoinTemp from './HomeCoinTemp'
import SOL from './solana logo.jpg'
import USDT from './usdt.png'

export default function HomeCoins(props){
    return(
        <div id="homeCoinsCont">
            {props.btcAmount !== 0 ? 
                <HomeCoinTemp dark = {props.dark} logo={BTC} coinName='BTC' quant={props.btcAmount} value={`${props.btcAmount*100000}`} dailyChange= '+20%' profit={true}></HomeCoinTemp>
                :null
            }
            {props.solAmount !== 0 ? 
                <HomeCoinTemp dark = {props.dark} logo={SOL} coinName='Solana' quant={props.solAmount} value={`${(props.solAmount*100).toFixed(2)}`} dailyChange= '-10%' profit={false} ></HomeCoinTemp>
            :null
            }
            {props.usdtAmount >0 ?
                <HomeCoinTemp logo = {USDT} coinName={"USDT"} quant={`${props.usdtAmount} USDT`} value={`${props.usdtAmount}`} dark ={props.dark}/>    
            :null
            }

        </div>
    )
}
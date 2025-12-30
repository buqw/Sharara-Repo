import BTC from './btc logo.png'
import CoinTemp from './HomeCoinTemp'
import SOL from './solana logo.jpg'
import USDT from './usdt.png'

export default function HomeCoins(props){
    return(
        <div id="homeCoinsCont">
           
            <CoinTemp logo={BTC} coinName='BTC' quant='0.00001 BTC' value='$120' dailyChange= '+20%' profit={true} dark ={props.dark}/>
            <CoinTemp logo={SOL} coinName='SOLANA' quant='0.5 Sol' value='$100' dailyChange= '-10%' profit={false} dark ={props.dark}/>
            {props.usdtAmount >0 ?<CoinTemp logo = {USDT} coinName={"USDT"} quant={`${props.usdtAmount} USDT`} value={`$${props.usdtAmount}`} dark ={props.dark}/> :null}

        </div>
    )
}
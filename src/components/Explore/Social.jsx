import Post from "./Post"
import BTCIMG from './BTCIMG.jpg'
import solimg from './solimg.png'
import botTrade from './botTrade.jpg'

export default function Social(props){

    return(
        <>
            <div id="social-body">
                <Post username={"Sharara_User14"} img={BTCIMG} title={"Join my free group Now"} text={"Now that BTC has hit $100K, my group is open to everyone. Don’t waste time — join now!"}/>
                <Post username={"Sharara_User2"} img={botTrade} title={"Ai Bot trading results"} text={"I used AI trading bots for analysis and trading. They generated an 80% profit in just one month!"}/>
                <Post username={"Sharara_User6"} img={solimg} title={"Asking for financial advice"} text={"Guys, should I invest in Solana right now? It looks like a good buying opportunity, but I’m worried."}/>
            </div>
        </>
    )
}
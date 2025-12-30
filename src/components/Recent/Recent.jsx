import Footer from "../Public-Components/Footer"
import RecentTemp from "./RecentTemp"

export default function Recent(props){
    return(
        <div>
            <div id="logContainer">
                {props.recentLog.length == 0? (
                    <div id="noLogMessage">
                        <p className={props.dark ? "darkModeText":"lightModeText"}>No recent Activities to show here.</p>
                    </div>
                ):(null)}

                {props.recentLog.map(e =>{
                    return(
                        <RecentTemp dark={props.dark} proccess={e.process} amount={e.amount} date={e.date}/>
                    )
                })}
            </div>
            <Footer activeBtn={3} dark={props.dark}/>
        </div>
    )
}
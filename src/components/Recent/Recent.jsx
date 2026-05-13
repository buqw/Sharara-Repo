import Footer from "../Public-Components/Footer"
import RecentTemp from "./RecentTemp"

export default function Recent(props){
    return(
        <div id="recent-body" className={props.dark ? 'darkModeBody' : 'lightModeBody'}>
            <div id="logContainer">
                {props.recentLog.length === 0? (
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
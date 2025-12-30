import { TiInputChecked } from "react-icons/ti";


export default function(props){

    return(
        <div id="recentDiv" className={props.dark ? "darkMode": "lightMode"}>
            <div id="recentCheck">
                <TiInputChecked />
            </div>
            <div id="recentMessage">
                <p>{`${props.proccess} at ${props.date}`}</p>
            </div>

        </div>
    )
}
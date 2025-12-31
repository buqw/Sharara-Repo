
import { IoSearch } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function Nav(props){

    return(
            <nav className={props.dark ? 'darkModeNav' : 'lightModeNav'} id='homeNav'>
                <Link id='userInfo' to={"/Profile"}>
                    <div id='avatar'>
                        <img id='avatarImg' src={props.avatar} alt="" />
                    </div>
                    <div id='username'>
                        <p>{`@${props.username}`}</p>
                    </div>
                </Link>
                <div id='searchIcon'>
                    <div>
                        <IoSearch/>
                    </div> 

                    <div id='darkIcon' onClick={()=> props.changeMode(!props.dark)}>
                       {props.dark ? <MdDarkMode/> : <MdOutlineDarkMode/>}
                    </div>

                </div>
            </nav>

    )
} 


import logo from './blank-avatar.webp'
import { IoSearch } from "react-icons/io5";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";


export default function Nav(props){

    return(
            <nav className={props.dark ? 'darkModeNav' : 'lightModeNav'} id='homeNav'>
                <div id='userInfo'>
                    <div id='avatar'>
                        <img id='avatarImg' src={logo} alt="" />
                    </div>
                    <div id='username'>
                        <p>@Sharara_User</p>
                    </div>
                </div>
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


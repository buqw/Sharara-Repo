import { TbLetterX } from "react-icons/tb";
import { Link } from "react-router-dom";
import { use, useState } from "react";

export default function(props){

    const [wantedUsername, setWantedUsername] = useState(props.username);
    const [errorMessage,setErrorMessage] = useState("");

    const handlehange2 = (e) =>{
        const value = e.target.value;
        setWantedUsername(value)
    }

    const handlehange3 = ()=>{
        if(wantedUsername == ""){
            setErrorMessage("Invalid username.")
            return;
        }else{setErrorMessage("")}

        if(wantedUsername == props.username){
            setErrorMessage(`${wantedUsername} is your current username.`)
            return;
        }else{setErrorMessage("")}
        props.setUsername(wantedUsername);
    }
    const handleChange = (e) =>{
        const file = e.target.files[0];
        if(!file){
            return
        }

        if(!file.type.startsWith("image/")){
            alert("File should be image.")
            return
        }
        const imageUrl = URL.createObjectURL(file);
        props.setAvatar(imageUrl)
    }
    return(
        <>
            <div className="exitIcon" >
                <Link to='/' className={props.dark ? 'darkModeText' : 'lightModeText'}><TbLetterX/></Link>
            </div>
            <div id="profImg">
                <img src={props.avatar} alt="" />
            </div>
            <div id="profUsername">
                <p className={props.dark ? 'darkModeText' : 'lightModeText'}>{`@${props.username}`}</p>
            </div>
            <div id="changePhoto">
                <label htmlFor="imageUpload">Change profile photo</label>
                <input onChange={handleChange} accept="image/*" id="imageUpload" type="file" style={{display: "none"}}/>
            </div>

            <div id="profInfo">
                <div id="profTitle">
                    <p className={props.dark ? 'darkModeText' : 'lightModeText'}>Your Info</p>
                </div>

                <div id="profName" className={props.dark ? 'darkMode' : 'lightMode'}>
                    <div id="usernameLabel">
                        <label className={props.dark ? 'darkModeText' : 'lightModeText'} htmlFor="usernameInp">Username</label>
                    </div>
                    <div id="usernameSubmit">
                        <input onChange={handlehange2} value={wantedUsername}  id="usernameInp" type="text" maxLength={20}/>    
                        <button onClick={handlehange3}>Change Username</button>
                    </div>
                    <p className="redText errorMessage">{errorMessage}</p>
                </div>

                <div id="profEmail" className={props.dark ? 'darkMode' : 'lightMode'}>
                    <label className={props.dark ? 'darkModeText' : 'lightModeText'} htmlFor="">E-mail</label>
                    <input type="text" value={props.userEmail} disabled />
                </div>

            </div>
        
        </>
    )
}
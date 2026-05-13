import { FaHeart } from "react-icons/fa";
import { AiOutlineRetweet } from "react-icons/ai";
import { useState } from "react";

export default function Post(props){
    const [liked,setLiked] = useState(false);
    const [repost, setRepost] = useState(false);
    return(
        <div className="post-body">
            <div className="post-user">
                <p>{props.username}</p>
            </div>
            <div className="post-div-img">
                <img className="post-img" src={props.img} />
            </div>
            <div className="post-info">
                <p>{props.title}</p>
                <p>{props.text}</p>
            </div>
            <div className="interacts">
                <p onClick={()=>{setLiked(!liked)}} id={liked ? "liked" : ""}><FaHeart/></p>
                <p onClick={()=>{setRepost(!repost)}} id={repost ? "repost": ""}><AiOutlineRetweet/></p>
            </div>
        </div>
    )
}
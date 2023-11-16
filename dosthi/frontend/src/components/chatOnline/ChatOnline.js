import React from 'react'
import "./chatOnline.css";
import pic from "../chatOnline/unsplash2.jpg";

export default function ChatOnline() {
  return (
    <div className="chatOnline">
        <div className="chatOnlineFriend">
            <div className="chatOnlineImgContainer">
                <img 
                src={pic} 
                alt="" 
                className='chatOnlineImg'/>
                <div className="chatOnlineBadge"></div>
            </div>
            <span className="chatOnlineName">Vijay</span>
        </div>
    </div>

  )
}

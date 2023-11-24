import React from "react";
import "./message.css";
import Celebrity from "../message/Celebrity-Database-ISTJ-2.png";

export default function Message({own}) {
  return (
    <div className={own ? "message own " : "message"}>
      <div className="messageTop">
        <img src={Celebrity} alt="image is deleted" className="messageImg" />
        <p className="messageText">Hellow these is message</p>
      </div>
      <div className="messageBottom">30 min ago</div>
    </div>
  );

  
}

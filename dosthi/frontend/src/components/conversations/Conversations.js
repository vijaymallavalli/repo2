import React from "react";
import "./conversation.css";
import photo from "./unsplash2.jpg"
export default function Conversations() {
  return (
    <div className="conversation">
      <img src={photo} alt="" className="conversationImg" />

      <span className="conversationName">Vijay</span>
    </div>
  );
}

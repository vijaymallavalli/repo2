import React from "react";
import "./messanger.css";
import Header from "../../components/header";
import Conversations from "../../components/conversations/Conversations";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";

export default function Messanger() {
  return (
    <>
      <Header />
      <div className="messanger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input
              type="text"
              placeholder="search for friends"
              className="chatMenuItem"
            />
            <Conversations />
            <Conversations />
            <Conversations />
            <Conversations />
            <Conversations />
            <Conversations />
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            Box
            <div className="chatBoxTop">
              <Message />
              <Message />
              <Message own={true} />
              <Message />
              <Message />
              <Message  own={true}/>
              <Message />
            </div>
            <div className="chatBoxBottom">
            <textarea  className ="chatMessageInput"placeholder="Message Dosthi..."></textarea>
            <button className="chatSubmitButton" type="submit" >Send </button>
            </div>
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">Online
          <ChatOnline/>
          <ChatOnline/>
          </div>
        </div>
      </div>
    </>
  );
}

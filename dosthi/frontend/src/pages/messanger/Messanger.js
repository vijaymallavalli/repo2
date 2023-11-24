import React from "react";
import "./messanger.css";
import Header from "../../components/header";
import Conversations from "../../components/conversations/Conversations";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Messanger() {
  const [conversation, setConversation] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));

  // console.log({ user });
  console.log({conversation});

  useEffect(() => {
    const getConversation = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/conversation/getConversation/`+user.id
        );
        setConversation(res.data.conversation);
        // console.log('res', res.data.user.id)
        console.log(res.data.conversation)
        
      } catch (err) {
        console.log("error", err);
      }
    };
    getConversation();
  }, [user.id]);

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
            {conversation.messages.map(c => (
              <Conversations conversation={c}  currentUser={user}/>
))}
            {/* <Conversations />
            <Conversations />
            <Conversations />
            <Conversations />
            <Conversations />
            <Conversations /> */}
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
              <Message own={true} />
              <Message />
            </div>
            <div className="chatBoxBottom">
              <textarea
                className="chatMessageInput"
                placeholder="Message Dosthi..."
              ></textarea>
              <button className="chatSubmitButton" type="submit">
                Send{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            Online
            <ChatOnline />
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  );
}

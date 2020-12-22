import React from "react";
import "../styles/Chat.css";
import { useParams } from "react-router-dom";
import StarsIcon from "@material-ui/icons/Stars";
import HeightIcon from "@material-ui/icons/Height";

const Chat = () => {
  const { roomId } = useParams();
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__headerLeft">
          <h4 className="chat__channelName">
            <strong># general</strong>
            <StarsIcon />
          </h4>
        </div>
        <div className="chat__headerRight">
          <p>
            <HeightIcon /> Details
          </p>
        </div>
      </div>
    </div>
  );
};
export default Chat;

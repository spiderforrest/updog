import React from 'react';
import './MessageWindow.css';

export default function MessageWindow() {
  return (
    <div className="message-window">
      <div className="message-div div-received">
        <p className="message received">Hey</p>
      </div>
      <div className="message-div div-sent">
        <p className="message sent">Hello</p>
      </div>
      <div className="message-div div-received">
        <p className="message received">How are you?</p>
      </div>
      <div className="message-div div-sent">
        <p className="message sent">p good</p>
      </div>
      <div className="message-div div-received">
        <p className="message received">did u bring the updog?</p>
      </div>
      <div className="message-div div-sent">
        <p className="message sent">what&apos;s updog?</p>
      </div>
      <div className="message-div div-received">
        <p className="message received">oh not much</p>
      </div>
      <div className="message-div div-sent"></div>
      <div className="chat-controls">
        <input className="message-input" type="text"></input>
        <button className="send-button">Send</button>
      </div>
    </div>
  );
}

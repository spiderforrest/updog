import React from 'react';
import MessageWindow from '../MessageWindow/MessageWindow.js';
import './ChatPage.css';

export default function ChatPage() {
  return (
    <div className="chat-page">
      <MessageWindow />
    </div>
  );
}

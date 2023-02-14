import React from 'react';

export default function MessageWindow() {
  return (
    <div className="message-window">
      <p className="received">Hey</p>
      <p className="sent">Hello</p>
      <p className="received">How are you?</p>
      <p className="sent">p good</p>
      <p className="received">did u bring the updog?</p>
      <p className="sent">what&apos;s updog?</p>
      <p className="received">oh not much</p>
      <div>
        <input type="text"></input>
        <button>Send</button>
      </div>
    </div>
  );
}

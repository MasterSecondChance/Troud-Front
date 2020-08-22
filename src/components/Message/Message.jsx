import React from 'react';
import './Message.scss';

const Message = () => {
  return (
    <div className="Message">
      <div>
        <h3 className="Message__user">Julio Muñoz</h3>
        <time className="Message__date">08/22/20</time>
      </div>
      <div>
        <button className="Message__delete">
          <img width="30" src="./src/assets/delete-icon.svg" alt="BackImage" />
        </button>
        <button className="Message__chat">
          <img width="30" src="./src/assets/message-icon.svg" alt="BackImage" />
        </button>
      </div>
    </div>
  )
}

export default Message
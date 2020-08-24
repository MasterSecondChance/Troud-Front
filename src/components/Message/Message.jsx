import React from 'react';
import './Message.scss';

const Message = () => {
  return (
    <div className="Message">
      <div>
        <h3 className="Message__user" tabindex="0">Julio Muñoz</h3>
        <time className="Message__date" tabindex="0">08/22/20</time>
      </div>
      <div>
        <button className="Message__delete">
          <i className="delete-icon"></i>
        </button>
        <button className="Message__chat"></button>
      </div>
    </div>
  )
}

export default Message
import React from 'react';
import './Message.scss';
import Icon from '../../assets/fonts/icon';

const Message = () => {
  return (
    <div className='Message'>
      <div>
        <h3 className='Message__user' tabIndex='0'>Julio Muñoz</h3>
        <time className='Message__date' tabIndex='0'>08/22/20</time>
      </div>
      <div>
        <button className='Message__delete'>
          <Icon icon='delete' />
        </button>
        <button className='Message__chat'>
          <Icon icon='message' />
        </button>
      </div>
    </div>
  );
};

export default Message;

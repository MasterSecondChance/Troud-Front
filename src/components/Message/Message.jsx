import React from 'react';
import './Message.scss';
import Icon from '../../assets/fonts/icon';

const whatsappLink = 'https://api.whatsapp.com/send?phone=${phone}&text=hola%20soy%20sdljndsrgjkldfg';

const Message = () => {
  return (
    <a className='Message' href="https://api.whatsapp.com/send?phone=${phone}&text=hola%20soy%20sdljndsrgjkldfg">
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
    </a>
  );
};

export default Message;

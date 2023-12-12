import React, { useState,useEffect } from 'react';
import './chatbot.css'
import customer from '..//..//img/BocT_shirt.jpg'
import admin from '..//..//img/admin.jpg'
function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('')
  const [visible, isVisible] = useState(false)
  const handleMessageSend = (e) => {
    e.preventDefault()
    if(message === '') return
    // Add user's message to the messages state
    setMessages(prevMessages => [...prevMessages, { text: message, sender: 'user' }]);
    // Clear the input field
    setMessage('')
    // Handle bot's response
    
  };
  const handleChatbot =()=>{
    isVisible(!visible)
    console.log(visible)
  }
const handleinput =(e)=> setMessage(e.target.value)
  return (
    <div className='chatbotMain'>
      <div className={`chatbot ${visible ? 'visible' : ''}`}>
        <div  id='chat-container'>
          {/* Display messages */}
          <div className='admin'>

          <div className='customer'>hệ thống có thể sẽ trả lời trong vòng 5 phút xin cảm ơn</div>
          <img src={admin}   className='admin-items'/>

          </div>
          {messages.map((message, index) => (
            <div key={index} className='customer'>
              <img src={customer} className='customer-items'/>
              {message.text}
            </div>
          ))}
        </div>
        <form id="input-container" onSubmit={handleMessageSend}>
          <input value={message} type="text" id="user-input" placeholder="Type your message..." onChange={handleinput}/>
          <button id="send-button"  type='submit'>Send</button>
        </form>
      </div>
      <div onClick={handleChatbot} className='chatbtn'>
        mess
      </div>
    </div>
  );
}

export default Chatbot;

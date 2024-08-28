import React from 'react'
import ChatBot from "react-chatbotify";


function ChatbotComponent() {

  const CustomizedSettings = {
    header: {
      title: "Wicked Interactive"
    }
  }

  return (
    <ChatBot settings={CustomizedSettings}/>
  )
}

export default ChatbotComponent
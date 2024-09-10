import React from 'react'
import ChatBot from "react-chatbotify";
import DefaultAvatar from '../assets/tour-guide.png'; // Avatar icon

function ChatbotComponent() {

  const CustomizedSettings = {
    header: {
      title: "Wicked Interactive",
      showAvatar: true,
      avatar: DefaultAvatar
    },
    // Icon that displays next to the chat bubble
    botBubble: {
      showAvatar: true,
      avatar: DefaultAvatar
    },
    // The large icon button
    // Shows from the bottom right corner
    chatButton: {
      icon: DefaultAvatar
    }
  }

  // Theme for the chatbot
  const ChatbotStyle = {

  }

  // The dialogue between the bot and user
  const flow = {
    start: {
      message: "Hello! Welcome to Wicked Interactive AR Marketing. How can I be of assistance?"
    }
  }


  return (
    <ChatBot settings={CustomizedSettings} flow={flow}/>
  )
}

export default ChatbotComponent
import React, { useCallback, useEffect, useState } from "react";
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import axios from "axios";
import { OPENAI_API_KEY } from "@env";
import OpenAI from "openai";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hey, how can I help you?",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Chatbot",
        },
      },
    ]);
  }, []);

  const getChatbotResponse = async (message: string) => {
    try {
      const openai = new OpenAI({
        apiKey: OPENAI_API_KEY,
      });

      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a helpful assistant that provides health-related information and calorie counts.",
          },
          { role: "user", content: message },
        ],
      });

      console.log("api response = ", completion.choices[0].message.content);
      return completion.choices[0].message.content;
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      throw error;
    }
  };

  const onSend = useCallback(async (messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );

    const userMessage = messages[0].text;
    console.log("", userMessage);
    try {
      const botResponse = await getChatbotResponse(userMessage);
      const botMessage = {
        _id: Math.floor(Math.random() * 1000000),
        text: botResponse,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Chatbot",
        },
      };
      console.log("botMessage = ", botMessage);
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, [botMessage])
      );
    } catch (error) {
      console.error("Error getting chatbot response:", error);
    }
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={(props) => {
        return (
          <Bubble
            {...props}
            wrapperStyle={{
              right: {
                backgroundColor: "#8883F0",
              },
              left: {
                backgroundColor: "#f0f0f0",
              },
            }}
            textStyle={{
              right: {
                color: "#fff",
              },
            }}
          />
        );
      }}
    />
  );
};

export default Chat;

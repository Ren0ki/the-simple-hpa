import { useState } from "react";
import {createChatBotMessage, Chatbot} from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import config from "./config";

const ChatbotRenderer = () => {

    const [showChatbot, setShowChatbot] = useState(false);

    return (

        <div>
            <button onClick={() => setShowChatbot(!showChatbot)}>
                {showChatbot ? "Close Chat" : "Open Chat"}
            </button>
            {showChatbot && (
            <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
            )}
        </div>
    
    );
};

export default ChatbotRenderer;


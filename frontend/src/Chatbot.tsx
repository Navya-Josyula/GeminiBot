
import React, { useState } from "react";
import { sendMessage } from "./api";

const Chatbot: React.FC = () => {
    const [messages, setMessages] = useState<{ user: string; bot: string }[]>([]);
    const [input, setInput] = useState("");

    const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMessage = input;
    setInput("");

    const response = await sendMessage(userMessage);
    setMessages([...messages, { user: userMessage, bot: response.reply }]);
};

    return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "left" }}>
        <div style={{ border: "1px solid #ccc", padding: "10px", minHeight: "300px" }}>
        {messages.map((msg, index) => (
            <p key={index}><strong>You:</strong> {msg.user} <br/><strong>Bot:</strong> {msg.bot}</p>
        ))}
    </div>
    <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
    />
    <button onClick={handleSend}>Send</button>
    </div>
    );
};

export default Chatbot;

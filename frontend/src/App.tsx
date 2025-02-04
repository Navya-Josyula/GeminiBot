import React from "react";
import Chatbot from "./Chatbot";

const App: React.FC = () => {
    return (
    <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>AI Chatbot</h1>
        <Chatbot />
    </div>
    );
};

export default App;

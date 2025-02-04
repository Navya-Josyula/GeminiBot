import axios from "axios";
import express from "express";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
    const { message } = req.body;
    const response = await axios.post("http://127.0.0.1:5001/ask", { message });
    res.json({ reply: response.data.reply });
    } catch (error) {
    res.status(500).json({ error: "Error processing request" });
    }
});

export default router;

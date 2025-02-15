import { generateContent } from '../services/ai.service.js';

const getReview = async (req, res) => {
    try {
        const { code, language } = req.body;

    if (!code || !language) {
        return res.status(400).json({ error: "Code and language are required!" });
    }
        const response = await generateContent(code);
        res.send( response );
    } catch (error) {
        console.error("Error generating AI response:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

export default { getReview };

import { generateContent } from '../services/ai.service.js';

const getResponse = async (req, res) => {
    const prompt = req.query.prompt

    if(!prompt){
        return res.status(400).send("Propmt is required");
    }

    const response = generateContent(prompt);
    res.send(response);
}

export default {getResponse}
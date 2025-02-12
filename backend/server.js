import app from "./src/app.js";
import dotenv from "dotenv";
dotenv.config();

app.listen(3000, ()=>{
    try {
        console.log("Server is running");
    } catch (error) {
        console.log(error);
    }
})
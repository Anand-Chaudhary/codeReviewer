import app from "./src/app.js";
require('dotenv').config()

app.listen(3000, ()=>{
    try {
        console.log("Server is running");
    } catch (error) {
        console.log(error);
    }
})
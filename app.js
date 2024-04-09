import express from 'express';
import { config } from 'dotenv';

const app = express();

// For Environment Variables
config({ path: ".env" });

app.get("/", (req, res) => {
    res.send("chatApp");
})

// Starting Server
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server running on PORT: ${port}`);
})
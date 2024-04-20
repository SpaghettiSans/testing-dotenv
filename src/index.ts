import express, { Request, Response } from  "express";
import dotenv from "dotenv";

dotenv.config;
const app = express();

const PORT = process.env.PORT;

app.get('/', (request, response) => {
    response.status(200).send("testing dotenv");
});

app.listen(PORT, () => {
    console.log("listenning to port: ", PORT);
}).on("error", (error) => {
    throw new Error(error.message);
})
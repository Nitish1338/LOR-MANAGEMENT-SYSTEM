import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

const app = express();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ##############     Routes   #######################

import userRouter from "./routes/user.routes.js";
app.use("/api/v1/users", userRouter);

// ##########      Routes Declaration   ############################
// DEFAULT ROUTES
app.get('/', (req, res) => {
    res.status(200).send(`
        <div style="text-align: center;">
            <h1>Welcome to College ERP</h1>
            <p>Developed by Mr. Nitish Kumar</p>
            <p>😊🎓📚</p>
        </div>
    `);
});



export default app;
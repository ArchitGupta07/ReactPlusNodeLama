import express from "express";
import cookieParser from "cookie-parser";
import postRouter from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import cors from "cors";

const app = express()


app.use(cors({ origin: process.env.CLIENT_URL, credentials: true })); // credentials = true allow us to send cookie to the client side
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);

// Post router
app.use("/api/posts", postRouter)

app.use("/test", (req, res) => {
    res.json("hello")
})

app.listen(8000, () => {
    console.log("Server is Running!");
})
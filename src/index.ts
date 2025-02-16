import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose"


const app =express()
const PORT = 8080

app.use(cors({
    credentials:true
}))

app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

const server =http.createServer(app)

server.listen(PORT , ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})

const MONGO_URL= `mongodb+srv://imtoufiq1:imtoufiq1@cluster0.x0eww.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

// mongoose.Promise= Promise;
// mongoose.connect(MONGO_URL)
// mongoose.connection.on("error", (error : Error)=> console.log(error))

// Async function to connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL, {
        });
        console.log("Connected to MongoDB successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1); // Exit process on failure
    }
};

// Connect to MongoDB
connectDB();

// Handle MongoDB connection errors
mongoose.connection.on("error", (error) => {
    console.error("MongoDB connection error:", error);
});

// app.use("/", router())
app.use("/",(req, res)=>{
    res.send("hello world")
})
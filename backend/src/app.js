import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import userRouter from "./routes/userRouter.js";
import conn from "./db/config.js";

conn();

const app = express();
const PORT = process.env.PORT || 9000;

// ✅ CORS FIRST (important)
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",
      "http://72.61.237.41:3000"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);



// body parser
app.use(express.json());

// routes
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
  res.json({ message: "This is Home page" });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
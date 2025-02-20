import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import getUserData from "./jobs/getUserData.js";
import updateScore from "./jobs/updateScore.js";

dotenv.config();
const app = express();
const PORT=5000
export const userInfo=[]
app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.post("/update", updateScore);
app.get("/user/:id", getUserData);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
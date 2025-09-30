import express from 'express'
import connectDB from './config/db.js';
import dotenv from 'dotenv'
import router from './routes/routes.js';
import cors from 'cors'

dotenv.config();

const app = express();

const PORT = 8080;
app.use(express.json())

app.use(cors());

app.use("/api/v1/",router);

connectDB()
  .then(() => console.log("Connected to DB"))
  .catch((error) => console.error("DB connection error", error));


app.listen(PORT,(req, res) => {
    console.log("Server is running on port : ",PORT);
})
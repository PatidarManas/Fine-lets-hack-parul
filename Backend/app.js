import express from "express";
// import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import authrouter from "./Routes/Auth.js";
import transactionrouter from "./Routes/transaction.js";
import { application } from "./Models/application.js";
import cloudinary from "cloudinary"
import adminrouter from "./Routes/Admin.js";
// config();
const app = express();

cloudinary.v2.config({ 
  cloud_name: 'dw2mjmbf4', 
  api_key: '878427799417668', 
  api_secret: 'FT_i9tDKsVgdJImpapRbcHlS-Dk' 
});
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

export default app;

app.use("/auth",authrouter)
app.use("/transaction",transactionrouter)
app.use("/admin",adminrouter)
// app.get("/now",async(req,res)=>{
//   await application.create({
//     app:548956
//   })
// })
app.get("/", (req, res) =>
  res.send(
    `<h1>Site is Working. click <a href=${process.env.FRONTEND_URL}>here</a> to visit frontend.</h1>`
  )
);
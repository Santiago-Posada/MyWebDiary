import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();
app.get("/health",(req,res)=> res.json({status: "ok"}))
app.listen(process.env.PORT, ()=>console.log(`Server running on port ${process.env.PORT}`));
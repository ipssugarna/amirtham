import express from "express";
import path from "path";
import mongoose from "mongoose";
import dotenv from "dotenv";
import seedRouter from "./routes/seedRoutes.js";
import productRouter from "./routes/productRoutes.js";
import userRouter from "./routes/userRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import uploadRouter from "./routes/uploadRoutes.js";

dotenv.config();
mongoose.set('strictQuery', false);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("https://amrithamsrilankadd.onrender.com/api/keys/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});
app.get("https://amrithamsrilankadd.onrender.com/api/keys/google", (req, res) => {
  res.send({ key: process.env.GOOGLE_API_KEY || "" });
});

app.use("https://amrithamsrilankadd.onrender.com/api/upload", uploadRouter);
app.use("https://amrithamsrilankadd.onrender.com/api/seed", seedRouter);
app.use("https://amrithamsrilankadd.onrender.com/api/products", productRouter);
app.use("https://amrithamsrilankadd.onrender.com/api/users", userRouter);
app.use("https://amrithamsrilankadd.onrender.com/api/orders", orderRouter);

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/frontend/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/frontend/build/index.html"))
);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});

process.on('unhandledRejection', (error) => {
  console.error('Unhandled Promise Rejection:', error);
});

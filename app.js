const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");

dotenv.config();

const app = express();

app.use(express.json());

app.use("/products", productRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Product API is running",
  });
});

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
});

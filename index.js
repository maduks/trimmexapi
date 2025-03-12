const express = require("express");
const db = require("./config/db");
const OrderRoute = require("./routes/OrdersRoutes");

const app = express();
app.use(express.json());
app.use("/api/orders", OrderRoute);

db()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

// Export the Express app for Vercel
module.exports = app;

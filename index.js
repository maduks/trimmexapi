const http = require("http");
const express = require("express");
const db = require("./config/db"); // Database configuration and connection setup
const OrderRoute = require("./routes/OrdersRoutes");

db()
  .then(() => {
    console.log("Connected to MongoDB");
    const app = express();
    const server = http.createServer(app);
    app.use(express.json());
    app.use("/api/orders", OrderRoute);
    server.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });

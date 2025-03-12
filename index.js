const express = require("express");
const db = require("./config/db");
const OrderRoute = require("./routes/OrdersRoutes");
const UserRoute = require("./routes/UsersRoutes");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
app.use(bodyParser.json());
app.use(
  cors({
    origin: "*", // Allow all origins (or replace with frontend URL)
    methods: "GET, POST, PUT, DELETE, OPTIONS",
    allowedHeaders: "Content-Type, Authorization",
  })
);

const corsOptions = {
  // Replace with your domain
  origin: "https://trimmex.vercel.app",
  methods: "GET, HEAD, PUT, PATCH, POST, DELETE",

  // Enable this if you need to
  // send cookies or HTTP authentication
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/orders", OrderRoute);
app.use("/api/users", UserRoute);

db()
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

// Export the Express app for Vercel
module.exports = app;

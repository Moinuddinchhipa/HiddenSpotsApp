const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const spotRoutes = require("./routes/spotRoutes");
const commentRoutes = require("./routes/commentRoutes"); // ✅


const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/spots", spotRoutes);          // e.g. /api/spots/add
app.use("/api", commentRoutes);             // ✅ will handle /api/comments/:id & /api/ratings/:id

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Express server is running!");
});

// Define routes
const weatherRoutes = require("./routes/weather");
app.use("/api/weather", weatherRoutes);

// Serve vite-built frontend files
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// // Serve index.html for all other routes (for frontend routing)
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
// });

// this was default const PORT = 5000;

// dynamic port assignment
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

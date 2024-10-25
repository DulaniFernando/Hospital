const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
const port = 5000; // You can use any port you like

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

// MySQL database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Dulani@2002",
  database: "HOSPITAL",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");
});

// Sample route
app.get("/", (req, res) => {
  res.send("Hello from the Node.js backend with MySQL!");
});
app.get("/api/users", (req, res) => {
  res.json([{ id: 1, name: "John Doe", email: "john.doe@example.com" }]);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

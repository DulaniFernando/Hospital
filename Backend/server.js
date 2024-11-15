const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
const port = 5000;

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

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
// app.get("/", (req, res) => {
//   res.send("Hello from the Node.js backend with MySQL!");
// });

app.post("/api/signup", (req, res) => {
  const { name, email, username, password } = req.body;
  console.log(`Received name: ${name}, email: ${email}`);
  res.json({
    message: "Form data received successfully!",
    receivedData: { name, email },
  });

  const sql =
    "INSERT INTO SIGNUP (NAME,EMAIL,USERNAME,PASSWORD) VALUES (?,?,?,?)";

  db.query(sql, [name, email, username, password], (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      return res.status(500).send("Error inserting data");
    }
    res.status(201).send("User created successfully");
  });
});

// app.get("/api/users", (req, res) => {
//   res.json([{ id: 1, name: "John Doe", email: "john.doe@example.com" }]);
// });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

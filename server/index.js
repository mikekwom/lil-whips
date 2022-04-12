const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 4000;
const sequelize = require("./sequelize");

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, "../build")));

// Endpoints here
app.get("/api/profile", async (req, res) => {
  let profile = await sequelize.query(`
    SELECT * FROM client
    `);
  res.status(200).send(info[0][0]);
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

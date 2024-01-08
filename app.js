require("dotenv").config();
const express = require("express");

const app = express();

const port = 3000;

app.use(express.json());

const connectDB = require("./database/connect");

const authRoutes = require("./routes/auth.routes");

app.use("/api/v1", authRoutes);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`you are listen on port ${port}`);
  });
});

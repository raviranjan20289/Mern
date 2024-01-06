const express = require("express");

const app = express();

const port = 3000;

app.use(express.json());

const authRoutes = require("./routes/auth.routes");

app.use("/api/v1", authRoutes);

app.listen(port, () => { 
  console.log("you are listen on port ${port}");
});

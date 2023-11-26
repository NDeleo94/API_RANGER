const express = require("express");
const app = express();
require("dotenv").config()

const { connectDB, syncTables } = require("./helpers/db");
const sequelize = require("./config/db");
connectDB(sequelize)
syncTables(sequelize)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/actors", require("./routers/actor"))

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listen on ${PORT}`);
});

const express = require("express");
const connectDB = require("./config/db");
const activityRoutes = require("./routes/activityRoutes");

connectDB();

const app = express();

app.use(express.json());

app.use("/activities", activityRoutes);

app.listen(5000, () => console.log(`server run`));

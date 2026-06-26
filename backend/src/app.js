const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const notificationRoutes = require("./routes/notificationRoutes");
const testRoutes = require("./routes/testRoutes");
const emailRoutes=require("./routes/emailRoutes")

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/test", testRoutes);
app.use("/api/email", emailRoutes);

module.exports = app;

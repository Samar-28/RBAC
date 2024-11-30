const express = require("express");
const bodyParser = require("body-parser");
const session = require("./config/redis");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

const app = express();

app.use(bodyParser.json());
app.use(session);
app.use("/auth", authRoutes);
app.use("/details", userRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;

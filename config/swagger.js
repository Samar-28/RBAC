const swaggerJsdoc = require("swagger-jsdoc");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Role-Based API with Redis Sessions",
      version: "1.0.0",
      description:
        "API documentation for role-based access control using Redis sessions",
    },
    servers: [{ url: "http://localhost:5000" }],
  },
  apis: ["./routes/*.js"],
};

module.exports = swaggerJsdoc(swaggerOptions);

require("dotenv").config();
const express = require("express");
const sequelize = require("./utils/db");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

const User = require("./models/userModel");
const models = {
  User,
};

// Object.keys(models).forEach((modelName) => {
//   if (models[modelName].associate) {
//     models[modelName].associate(models);
//   }
// });

const userRoutes = require("./routes/userRoutes");

const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    "https://loadmatch.app",
    "https://www.loadmatch.app",
  ],
  credentials: true,
};
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

app.get("/", (req, res) => {
  res.send("Welcome to LoadMatch Application");
});

app.use("/api/v1", userRoutes);

sequelize
  .authenticate()
  .then(() => {
    console.log(
      "Connection to the database has been established successfully."
    );
    return sequelize.sync();
  })
  .then(() => {
    console.log("Models have been synchronized with the database.");
    const PORT = process.env.NODE_DOCKER_PORT;

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database && run Server :", err);
  });

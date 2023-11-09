const express = require("express");
require("dotenv").config();
const userRouter = require("./routes/userRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", userRouter);

// Error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const corsOptions = {
  origin: "http://localhost:3000/",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

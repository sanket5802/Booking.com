const express = require("express");
const app = express();
require("express-async-errors");
require("dotenv").config();
const connectDB = require("./db/connect");
const cookieParser = require("cookie-parser");
const cors=  require('cors')
// Import the hotelsRoute
const hotelsRoute = require("./routes/hotels");
const authRoute = require("./routes/auth");
const userRoute = require('./routes/users');
const roomsRoute = require('./routes/rooms')
app.use(cors())
app.use(cookieParser());
app.use(express.json());


// Use the hotelsRoute as middleware
app.use("/api/hotels", hotelsRoute);
app.use("/api/users", userRoute );
app.use("/api/auth", authRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

const port = process.env.PORT || 8800;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();

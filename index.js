const express = require("express");
const bodyParser=require('body-parser');
const cors=require('cors');
const { MongoClient, ServerApiVersion } = require("mongodb");
const { default: mongoose } = require("mongoose");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 4000;
const uri = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.ugbsee6.mongodb.net/?retryWrites=true&w=majority`;
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
};
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
mongoose
  .connect(uri, connectionParams)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => console.log(err));
const user = require("./services/routes/user")();
const agent = require('./services/routes/agent')();
const thread = require('./services/routes/thread')();
// const auth = require('./services/routes/auth')();
app.post("/", (req, res) => {
  // console.log(req.body);
  console.log(req.query.message);
  console.log("---------------------------------------");
  res.json({ message: "request received" });
});
app.get("/", (req, res) => {
  res.json({ status: 200, message: "Welcome to the CS messaging Service" });
});
app.use("/user", user);
app.use("/thread", thread);
app.use("/agent", agent);
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const dbConnection = require("./Config/dbConnection");

dbConnection.dbConnect();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
})
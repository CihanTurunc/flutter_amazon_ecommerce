console.log("Hello,World");
// print("Hello World");

const express = require("express");
//import "package:express/express.dart"
const PORT = 3000;
const app = express();

// CREATING AN API
// GET, PUT, POST, DELETE, UPDATE -> CRUD

app.listen(PORT, "0.0.0.0", () => {
    console.log("connected at port " + PORT);
});
// localhost

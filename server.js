const express = require("express");
const mongoose = require("mongoose");

let PORT = process.env.PORT || 8080;
const mongoDBURL = process.env.MONGODB_URL || "mongodb://localhost/workout"
let app = express();
mongoose.connect(mongoDBURL, {
    useNewUrlParser: true,
    useFindAndModify: false
});

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

app.use(require("./routes/apiroutes.js"));
app.use(require("./routes/htmlroutes.js"));

app.listen(PORT,()=>{
    console.log("Server listening on: http://localhost:" + PORT);
});
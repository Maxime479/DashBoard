const express = require("express");
const mongoose = require("mongoose");
const Router = require("./users")
const app = require("../app");




app.use(express.json());

const username = "lucho";
const password = "RskhvacdYRAD6Kr";
const cluster = "Cluster1";
const dbname = "dashboardDB";

mongoose.connect(`mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

app.use(Router);

app.listen(3000, () => {
    console.log("Server is running at port 3000");
});




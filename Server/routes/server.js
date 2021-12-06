const express = require("express");
const Router = require("./users")
const app = require("../app");




app.use(express.json());





app.use(Router);






//Package Imports

const express = require("express");

//Created Index Routers

const indexRouter = express.Router();

//Model Import

const { Event } = require("../models/Event");

// Index Route GET Method

indexRouter.get("/", (req, res) => {
  res.send("Home");
});

module.exports = indexRouter;

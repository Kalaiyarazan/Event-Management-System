//Package Imports

const express = require("express");

//Created Index Routers

const indexRouter = express.Router();

//Model Import

const { Event } = require("../models/Event");

// Index Route GET Method

indexRouter.get("/", (req, res) => {
  Event.findAll().then(eventInstance => {
    const events = eventInstance.map(instance => instance.get());
    res.render("home", { events });
  });
});

module.exports = indexRouter;

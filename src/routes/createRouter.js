//Package Imports
const express = require("express");

const { Event } = require("../models/Event");

//Router Creation
const createRouter = express.Router();

//Render create-event
createRouter.get("/", (req, res) => {
  res.render("create-event");
});

//Save new event in databse
createRouter.post("/", (req, res) => {
  const {
    event,
    category,
    description,
    organiser,
    price,
    location,
    pin,
    date,
    time
  } = req.body;
  const newEvent = {
    event,
    category,
    description,
    organiser,
    price,
    location,
    pin,
    date,
    time
  };
  Event.create(newEvent)
    .then(result => {
      console.log(result.get());
      res.redirect("/");
    })
    .catch(console.error);
});

module.exports = createRouter;

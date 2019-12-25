const express = require("express");
const { Event } = require("../models/Event");

const createRouter = express.Router();

createRouter.get("/", (req, res) => {
  res.render("create-event");
});
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
      res.redirect(`/teacher/${req.params.id}`);
    })
    .catch(console.error);
  res.redirect("/");
});
module.exports = createRouter;

//Package Imports

const express = require("express");

//Created Index Routers

const searchRouter = express.Router();
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

//Model Import

const { Event } = require("../models/Event");

// Index Route GET Method

searchRouter.post("/", (req, res) => {
  const { search } = req.body;
  Event.findAll({
    where: {
      [Op.or]: [{ event: search }, { category: search }, { organiser: search }]
    }
  }).then(eventInstance => {
    const events = eventInstance.map(instance => instance.get());
    res.render("home", { events });
  });
});

module.exports = searchRouter;

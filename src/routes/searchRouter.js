//Package Imports

const express = require("express");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

//create searchRouter
const searchRouter = express.Router();

//Model Import

const { Event } = require("../models/Event");

// Search Fields based on event name, category, organiser, location/venue

searchRouter.post("/", (req, res) => {
  const { search } = req.body;
  Event.findAll({
    where: {
      [Op.or]: [
        { event: search },
        { category: search },
        { organiser: search },
        { location: search }
      ]
    }
  }).then(eventInstance => {
    const events = eventInstance.map(instance => instance.get());
    res.render("home", { events });
  });
});

//Filter based on min & max price
searchRouter.post("/price", (req, res) => {
  const min = Number(req.body.min);
  const max = Number(req.body.max);
  Event.findAll({
    where: {
      [Op.and]: {
        price: {
          [Op.gte]: min,
          [Op.lte]: max
        }
      }
    }
  }).then(eventInstance => {
    const events = eventInstance.map(instance => instance.get());
    res.render("home", { events });
  });
});

module.exports = searchRouter;

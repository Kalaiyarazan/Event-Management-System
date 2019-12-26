//Package Imports
const Sequelize = require("sequelize");
const EventDb = require("../config/EventDb");

//Database Schema
const Event = EventDb.define("event", {
  event: {
    type: Sequelize.STRING,
    allowNull: false
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  organiser: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false
  },
  pin: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  date: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  time: {
    type: Sequelize.TIME,
    allowNull: false
  }
});

//Test Sync with Database
const EventSync = ({ force = false } = { force: false }) => {
  Event.sync({ force })
    .then(() => {
      const testEvent = {
        event: "The Countdown 2020",
        category: "Holiday Parties",

        description: `The Countdown 2020
        New Year Party happening at Feathers Hotel on 31st December 2019.
        Let's celebrate this New Year Party with loads of fun and music.`,

        organiser: "Sound Room",
        price: 1999,
        location: "Feathers Hotel Chennai",
        pin: 600119,
        date: "2019-12-31",
        time: "19:00"
      };
      //Push test event to the database
      Event.create(testEvent)

        .then(result => {
          console.log(result.get());
        })

        .catch(console.error);
    })

    .catch(console.error);
};

exports.Event = Event;
exports.EventSync = EventSync;

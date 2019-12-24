const Sequelize = require("sequelize");
const EventDb = require("../config/EventDb");

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

const EventSync = ({ force = false } = { force: false }) => {
  Event.sync({ force })
    .then(() => {
      const testEvent = {
        event: "Event Name",
        category: "entertainment",
        description: "sample description",
        organiser: "kalaiyarazan",
        price: 499,
        location: "Rajaji Hall",
        pin: 600119,
        date: "2019-12-24",
        time: "13:00"
      };

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

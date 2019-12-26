//Package Imports
const Sequelize = require("sequelize");
require("dotenv").config();
const EventDb = new Sequelize(process.env.DB_URL);

//Connection with Database
EventDb.authenticate()
  .then(() => {
    console.log(
      "Connection has been established succesfully with ems database"
    );
  })
  .catch(err => {
    console.error("unable to connect to the ems database: ", err);
  });

module.exports = EventDb;

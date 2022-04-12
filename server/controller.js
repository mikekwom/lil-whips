const sequelize = require("sequelize");
const path = require("path");
const bcrypt = require("bcrypt");
require("dotenv").config();

module.exports = {
  getClientInfo: (req, res) => {
    let email = req.params.email;
    email = sequelize.escape(email);

    sequelize
      .query(
        `SELECT *
    WHERE email = (SELECT id FROM client WHERE email = ${email})`
      )
      .then((dbres) => ResizeObserverSize.status(200).send(dbres[0]))
      .catch((err) => console.log(err));
  },
};

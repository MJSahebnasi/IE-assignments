const jwt = require('jsonwebtoken')

const users = require('../model/dataBaze').users
const bad_req = require('../routes/jsonResults').bad_req

require("dotenv")
  .config();

const authorizeJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) {
                return res.status(400).json(bad_req);
            }

            req.userId = user;
            next();
        });
    } else {
        res.status(400).json(bad_req);
    }
};

module.exports = {
    authJWT: authorizeJWT
}
const nodemailer = require("nodemailer");
module.exports = {
    database: {
        username: process.env.USER ,
        password: process.env.PASS,
        database: process.env.NAME,
        host: process.env.HOST 
    },
    debug: true
}


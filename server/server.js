const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(3001, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAILUSERNAME,
      pass: process.env.PASSWORD,
    },
  });
  
contactEmail.verify((error) => {
if (error) {
    console.log(error);
} else {
    console.log("Ready to Send");
}
});


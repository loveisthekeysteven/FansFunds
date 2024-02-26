/**
 * @license Apache-2.0
 * @copyright 2024 TechwithChuks
 */

"use strict";

/**
 * node module
 */

const express = require("express");

const helmet = require("helmet");
require("dotenv").config();

/**custom modules */
const home = require("./src/routes/home.route");
const checkout = require("./src/routes/checkout.route");
/**
 * initial express app
 */
const app = express();

/**
 * setting ejs view engine
 */
app.set("view engine", "ejs");

/**
 * setting public folder
 */
app.use(express.static(`${__dirname}/public`));

/**
 * setting HTTP response secure header
 */
app.use(helmet());

/**parse request body */
app.use(express.urlencoded({ extended: true }));

/**
 * home page
 */
app.use("/", home);

/**checkout */
app.use("/checkout", checkout);

app.listen(process.env.PORT, () => {
  console.log(`The Port is running on ${process.env.PORT}`);
});

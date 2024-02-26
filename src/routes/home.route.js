/**
 * @license Apache-2.0
 * @copyright 2024 TechwithChuks
 */

"use strict";

/**
 *node module
 */
const router = require("express").Router();

/**
 * custom module
 */

const { home } = require("../controller/home.controller");

router.get("/", home);

module.exports = router;

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

const { checkout } = require("../controller/check.controller");

router.post("/", checkout);

module.exports = router;

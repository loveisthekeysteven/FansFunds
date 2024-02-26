/**
 * @license Apache-2.0
 * @copyright 2024 TechwithChuks
 */

"use strict";

const checkout = async (req, res) => {
  try {
    const { amount } = req.body;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = { checkout };

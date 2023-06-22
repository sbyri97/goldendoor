require("dotenv").config();
const axios = require("axios");
// const process = require("process");

exports.handler = async (event, context) => {
  const gmapi = process.env.GOOGLE_API_KEY;
  return {
    statusCode: 200,
    body: JSON.stringify({ title: `${gmapi}` }),
  };
};

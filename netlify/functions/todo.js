require("dotenv").config();
const axios = require("axios");
const process = require("process");

exports.handler = async (event, context) => {
  const instaapi = process.env.INS_TOKEN;
  return {
    statusCode: 200,
    body: JSON.stringify({ title: `${instaapi}` }),
  };
};

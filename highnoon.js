"use strict";
const LaunchChrome = require('./launcher');
const CDP = require('chrome-remote-interface');

function loadedPromise() {
  return new Promise((resolve, reject) => {
    resolve("yes!");
  });
};


module.exports.loadedPromise = loadedPromise;

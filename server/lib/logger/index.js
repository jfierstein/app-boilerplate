'use strict';

const bunyan = require('bunyan');

const config = require('config/env');

const logger = bunyan.createLogger({name: `raf-${config.env}`});

module.exports = logger;
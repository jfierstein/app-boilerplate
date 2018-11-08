'use strict';

module.exports = {
    env: 'dev',
    port: process.env.PORT || 4001,
    mongodb: {
        uri: process.env.MONGO_URI,
        debug: true
    }
}
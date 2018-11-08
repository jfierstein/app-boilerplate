'use strict';

module.exports = {
    env: 'local',
    port: process.env.PORT || 3001,
    mongodb: {
        uri: process.env.MONGO_URI || 'localhost:27107',
        debug: true
    }
}
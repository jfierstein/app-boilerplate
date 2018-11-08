'use strict';

module.exports = {
    env: 'production',
    port: process.env.PORT || 3001,
    mongodb: {
        uri: process.env.MONGO_URI,
        debug: true
    }
}
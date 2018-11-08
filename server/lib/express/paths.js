'use strict';
const path = require('path');

const publicPath = path.join(process.cwd(), 'client/build');
const publicFilePath = (fileName) => path.join(publicPath, fileName);

module.exports = {
    publicPath,
    publicFilePath
};
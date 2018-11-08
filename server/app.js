'use strict';

require('app-module-path').addPath(__dirname);

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet')
const express = require('express');
const path = require('path');


const config = require('config/env');
const request = require('lib/express/request');
const passportAuth = require('lib/express/passportAuth');
const errorHandler = require('lib/express/errorHandler');
const paths = require('lib/express/paths');
const logger = require('lib/logger');
const mongo = require('lib/db/mongo');

const app = express();
const port = config.port;

app.set('view engine', 'ejs');
app.set('trust proxy');

app.use(helmet());
app.use(bodyParser.json({ limit: '5MB' }));
app.use(cors());
app.use(errorHandler);
app.use(cookieParser());
app.use(require('express-session')({
    secret: `app-${Date.now()}`,
    resave: true,
    saveUninitialized: true
}));
app.use(passportAuth.initialize());
app.use(passportAuth.session());
app.use('/api/buildinfo', require('routes/buildInfo'));
app.use('/api/auth', require('routes/auth'));
app.use('/', express.static(paths.publicPath));
app.get('/*', (req, res) => res.sendFile(path.join(paths.publicPath, 'index.html')));

mongo.init.then(res => {
    app.listen(port);
    logger.info(`App running on port ${port}`);
});
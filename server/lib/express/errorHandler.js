'use strict';

module.exports = (req, res, next) => {
  res.promise = async (promise) => {
    try {
        const result = await promise;
        if (typeof result === 'object')
          res.json(result);
        else
          res.send(result);
    }
    catch(err) {
        if (err instanceof Error) {
          res.status(500);
          res.json({ status: 500, message: err.message || err.toString() });
        } else if (typeof err === 'object') {
          res.status(err.status || 500);
          res.json(err);
        } else {
          res.status(500);
          res.json({ status: 500, message: err });
        }
    }
  }
  next();
};
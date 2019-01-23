'use strict';

/**
 *
 * error handling for the resource not found 
 * @param {*} req request object
 * @param {*} res response object
 * @param {*} next run next function 
 */
module.exports = (req,res,next) => {
  let error = { error: 'Resource Not Found' };
  res.statusCode = 404;
  res.statusMessage = 'Not Found';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(error));
  res.end();
};
'use strict';

const express = require('express');

const Categories = require('../models/categories.js');
const categories = new Categories();

const router = express.Router();

// ROUTES
router.get('/api/v1/categories', getCategories);
router.post('/api/v1/categories', postCategories);

router.get('/api/v1/categories/:id', getCategory);
router.put('/api/v1/categories/:id', putCategories);
router.delete('/api/v1/categories/:id', deleteCategories);

// FUNCTIONS
/**
 *
 * Get all request to mongo database
 * @param request api request object
 * @param response api response object
 * @param next
 */
function getCategories(request,response,next) {
  // expects an array of object to be returned from the model
  categories.get()
    .then( data => {
      const output = {
        count: data.length,
        results: data,
      };
      response.status(200).json(output);
    })
    .catch( next );
}

/**
 *
 * Get request that is based on the parameter to the database
 * @param request api request object
 * @param response api response object
 * @param next
 */
function getCategory(request,response,next) {
  // expects an array with the one matching record from the model
  categories.get(request.params.id)
    .then( result => response.status(200).json(result[0]) )
    .catch( next );
}

/**
 *
 * Function for posting and object to the database
 * @param request api request object
 * @param response api response object
 * @param next
 */
function postCategories(request,response,next) {
  // expects the record that was just added to the database
  categories.post(request.body)
    .then( result => response.status(200).json(result) )
    .catch( next );
}

/**
 *
 * Function for updating an object based on the parameter in the database
 * @param request api request object
 * @param response api response object
 * @param next
 */
function putCategories(request,response,next) {
  // expects the record that was just updated in the database
  categories.put(request.params.id, request.body)
    .then( result => response.status(200).json(result) )
    .catch( next );
}

/**
 *
 * Function that deletes an object from the database based on the parameter
 * @param request api request object
 * @param response api response object
 * @param next
 */
function deleteCategories(request,response,next) {
  // Expects no return value (resource was deleted)
  categories.delete(request.params.id)
    .then( result => response.status(200).json(result) )
    .catch( next );
}

module.exports = router;
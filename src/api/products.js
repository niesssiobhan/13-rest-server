'use strict';

const express = require('express');

const Products = require('../models/products.js');
const products = new Products();

const router = express.Router();

// ROUTES
router.get('/api/v1/products', getProducts);
router.post('/api/v1/products', postProducts);

router.get('/api/v1/products/:id', getProduct);
router.put('/api/v1/products/:id', putProducts);
router.delete('/api/v1/products/:id', deleteProducts);

// FUNCTIONS
/**
 *
 *
 * @param {get products} request
 * @param {array of objects} response
 * @param {move to next function} next
 */
function getProducts(request,response,next) {
  // expects an array of objects back
  products.get()
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
 *
 * @param {one product} request
 * @param {array with one object} response
 * @param {move to next function} next
 */
function getProduct(request,response,next) {
  // expects an array with one object in it
  products.get(request.params.id)
    .then( result => response.status(200).json(result) )
    .catch( next );
}

/**
 *
 *
 * @param {add to products} request
 * @param {record added to db} response
 * @param {move to next function} next
 */
function postProducts(request,response,next) {
  // expects the record that was just added to the database
  products.post(request.body)
    .then( result => response.status(200).json(result) )
    .catch( next );
}


/**
 *
 *
 * @param {update product} request
 * @param {recorded updated product to db} response
 * @param {move to next function} next
 */
function putProducts(request,response,next) {
  // expects the record that was just updated in the database
  products.put(request.params.id, request.body)
    .then( result => response.status(200).json(result) )
    .catch( next );
}

/**
 *
 *
 * @param {delete from products} request
 * @param {no return} response
 * @param {move to next function} next
 */
function deleteProducts(request,response,next) {
  // Expects no return value (the resource should be gone)
  products.delete(request.params.id)
    .then( result => response.status(200).json(result[0]) )
    .catch( next );
}

module.exports = router;
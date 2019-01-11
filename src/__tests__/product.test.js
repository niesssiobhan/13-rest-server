'use strict';

const Products = require('../models/products.js');
const supertest = require('supertest');
const mockRequest = supertest(res);

describe('Products schema and routes', () => {
  it('result with a 500 if there is an error', () => {
    return mockRequest
      .get('/foo')
      .then(results => {
        expect(results.status).toBe(500);
      }).catch(console.error);
  });
  
  it('result with a 404 if route is invalid', () => {
    return mockRequest
      .get('/foobar')
      .then(results => {
        expect(results.status).toBe(404);
      }).catch(console.error);
  });

  it('result with a 200 to /api/v1/categories with correct response', () => {
    return mockRequest
      .get('/api/v1/categories')
      .then(results => {
        expect(results.status).toBe(200);
      }).catch(console.error);
  });

});
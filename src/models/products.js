'use strict';

const uuid = require('uuid/v4');
const productsModel = require('./products-schema.js');

const schema = {
};

class Products {

  constructor() {

  }

  get(_id) {
    let queryObject = _id ? {_id} : {};
    return productsModel.find(queryObject);
  }
  
  post(record) {
    let newRecord = new productsModel(record);
    return newRecord.save();
  }

  put(_id, record) {
  }

  delete(_id) {
  }

  sanitize(record) {
  }

}

module.exports = Products;

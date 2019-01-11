'use strict';

const uuid = require('uuid/v4');
const productsModel = require('./products-schema.js');

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
    record._id = id;
    return product.update({'_id': id}, {$set:{'name':record.name, 'description':record.description}});
  }

  delete(_id) {
    return product.deleteOne({'_id': id});
  }

  sanitize(record) {
  }

}

module.exports = Products;

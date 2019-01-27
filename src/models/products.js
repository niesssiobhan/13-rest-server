'use strict';

const uuid = require('uuid/v4');
const productsModel = require('./products-schema.js');

/**
 *
 *
 * @class Products
 */
class Products {

  /**
   *Creates an instance of Products.
   * @memberof Products
   */
  constructor() {

  }

  /**
   *
   * Function that will read all or read one record on the database 
   * @param {*} _id
   * @returns resolved promise
   * @memberof Products
   */
  get(_id) {
    let queryObject = _id ? {_id} : {};
    return productsModel.find(queryObject);
  }
  
  /**
   *
   * Function that creates to the database
   * @param {*} record
   * @returns resolved promise
   * @memberof Products
   */
  post(record) {
    let newRecord = new productsModel(record);
    return newRecord.save();
  }

  /**
   *
   * Function that pdates record in the database
   * @param {*} _id
   * @param {*} record
   * @returns resolved promise
   * @memberof Products
   */
  put(_id, record) {
    record._id = id;
    return product.update({'_id': id}, {$set:{'name':record.name, 'description':record.description}});
  }

  /**
   *
   * Function that deletes from the database
   * @param {*} _id
   * @returns resolved promise
   * @memberof Products
   */
  delete(_id) {
    return product.deleteOne({'_id': id});
  }

}

module.exports = Products;

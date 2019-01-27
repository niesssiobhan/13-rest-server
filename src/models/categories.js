'use strict';

const uuid = require('uuid/v4');
const sanitize = require('./sanitize.js');

/**
 *
 *
 * @class Categories
 */
class Categories {

  /**
   *Creates an instance of Categories.
   * @memberof Categories
   */
  constructor() {
    this.db = [];
  }

  /**
   *
   * Function that will read all or read one record on the database
   * @param {*} _id
   * @returns resolved promise
   * @memberof Categories
   */
  get(_id) {
    let response = _id ? this.db.filter( record => record._id === _id) : this.db;
    return Promise.resolve(response);
  }
  
  /**
   *
   * Function that creates to the database
   * @param {*} entry
   * @returns resolved promise
   * @memberof Categories
   */
  post(entry) {
    entry._id = uuid();
    let record = sanitize(entry);
    if(record._id){this.db.push(record);}
    return Promise.resolve(record);

  }

  /**
   *
   * Function that pdates record in the database
   * @param {*} _id
   * @param {*} entry
   * @returns resolved promise
   * @memberof Categories
   */
  put(_id, entry) {
    entry._id = _id;
    let record = sanitize(entry);
    for(let i = 0; i < this.db.length; i++){
      if(entry._id === this.db[i]['_id']){
        this.db[i] = record;
      }
    }
    return Promise.resolve(record);
  }

  /**
   *
   * Function that deletes from the database 
   * @param {*} _id
   * @returns resolved promise
   * @memberof Categories
   */
  delete(_id) {
    this.db = this.db.filter((record) => record._id !== _id);
    return Promise.resolve({});
  }

  /**
   *
   * Function that proocess valid data in the database
   * @param {*} data
   * @returns resolved promise
   * @memberof Categories
   */
  sanitize(data) {
    let valid = true;
    let record = {};
    for(let key in schema){
      if(schema[key].required){
        if(data[key]){
          record[key] = data[key];
        } else {
          valid=false;
        } 
      } else {
        record[key] = data[key];
      }
    }
    return valid ? record : undefined;
  }

}

module.exports = Categories;
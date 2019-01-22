'use strict';

const uuid = require('uuid/v4');
const sanitize = require('./sanitize.js');

/**
 *
 *
 * @class Categories
 */
class Categories {

  constructor() {
    this.db = [];
  }

  get(_id) {
    let response = _id ? this.db.filter( record => record._id === _id) : this.db;
    return Promise.resolve(response);
  }
  
  post(entry) {
    entry._id = uuid();
    let record = sanitize(entry);
    if(record._id){this.db.push(record);}
    return Promise.resolve(record);

  }

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

  delete(_id) {
    this.db = this.db.filter((record) => record._id !== _id);
    return Promise.resolve({});
  }

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
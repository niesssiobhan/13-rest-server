'use strict';

const schema = {
  _id: {required:true},
  name: {required:true},
  description: {require:true},
  category: {require:true},
};


/**
 *
 *
 * @param {sanitize} data
 * @returns record
 */
function sanitize(data) {
  let valid = true;
  let record = {};
  for(let key in schema){
    if(schema[key].required){
      if(data[key]){
        record[key] = data[key];
      }
      else {
        valid = false;
      } 
    }
    else {
      record[key] = data[key];
    }
  }
  return valid ? record : undefined;
}

module.exports = sanitize;
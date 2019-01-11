'use strict';

let Category = require('../models/categories.js');

describe('Categories Model', () => {
  it('can post() new category', () => {
    let obj = { name: 'category test', description: 'description test' };
    let category = new Category();
    return category.post(obj)
      .then(record => {
        Object.keys(obj).forEach(key => {
          expect(record[0][key]).toEqual(obj[key]);
        });
      })
      .catch(e => console.error('ERR', e));
  });

  it('can get() a category', () => {
    let obj = { name: 'category test', description: 'description test' };
    let category = new Category();
    return category.post(obj)
      .then(record => {
        return category.get(record._id)
          .then(category => {
            Object.keys(obj).forEach(key => {
              expect(category[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('can put() a category', () => {
    let obj = { name: 'category test', description: 'description test' };
    let category = new Category();
    category.post({ name: 'category test', description: 'description test' })
      .then(record => {
        record._id = 4;
        category.put(4, obj);
      })
      .then(record => {
        return category.get(record._id)
          .then(record => {
            Object.keys(obj).forEach(key => {
              expect(category[0][key]).toEqual(obj[key]);
            });
          });
      });
  });

  it('can delete() category', () => {
    let obj = { name: 'category test', description: 'description test' };
    let category = new Category();
    category.post({ name: 'category test', description: 'description test' })
      .then(record => {
        record._id = 4;
        category.delete(4);
      })
      .then(() => {
        return category.get()
          .then(record => {
            let boolean = false;
            for(let i = 0; i < record.length; i++){
              if(record._id === 4){
                boolean = true;
              }
            }
            expect(boolean).toBe(false);
          });
      });
  });

});
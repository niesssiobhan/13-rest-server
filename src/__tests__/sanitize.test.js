'use strict';

let categories = require('../models/categories.js');
let sanitize = require('../models/sanitize.js');


describe('categories', () =>{
  describe('sanitize', ()=>{
    it('will accept valid data', ()=>{
      let mockData = {
        id: '7',
        name: 'Noodle Bear',
        description: 'lovable dog',
        catergory: 'dog'
      }

      let result = sanitize(mockData);
      expect(result.name).toEqual('Noodle Bear');
    });

    it('will not accept invalid data', ()=>{
    });

  });
});

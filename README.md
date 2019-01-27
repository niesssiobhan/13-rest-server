![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## REST Server

### Author: Siobhan Niess

### Links and Resources
* [repo](https://github.com/niesssiobhan/13-rest-server)
* [travis](https://travis-ci.com/niesssiobhan/13-rest-server)
* [server](https://git.heroku.com/niess-13-lab.git) 

#### Documentation
* [jsdoc](https://niess-13-lab.herokuapp.com/docs) 
* [swagger](https://app.swaggerhub.com/apis/niesssiobhan/13-rest-server/1.0.0)

### Modules
#### `categories.js`
#### `products.js`
#### `app.js`
#### `index.js`
##### Exported Values and Methods

#### Collaborators
* John
* Heather
* Becca
* Brent

### Setup
#### `.env` requirements
* `PORT` - Port Number 3000
* `MONGODB_URI` - MONGODB_URI=mongodb://localhost:27017/baseball

#### Running the app
* You willhave to have nodemon, httpi, and mongodb installed
* run this command in your terminal `nodemon index.js`
* open up another window/tab in your terminal and you will port with httpie `http :3000`
* After this you will run mongodb by doing the follwing steps:
    * `start mongodb path path/to/database`
    * in another window/tab in your terminal you will run `start mongod` in another window
    * then `show db`
    * then `connect: db = connect("localhost:27017/products")`
    * then `run: db.products.find().pretty();` to print all items in db
* enter `http GET :3000/categories` or `http GET :8080/categories/<id>`
* Add a category you will have to enter `echo '{"name":"Category Name","description":"Category Description"}' |http POST :3000/categories`
* Add a product you will have to enter `echo '{"name":"Product Name","description":"Product Description"}' |http POST :3000/products`
* Update a product you will have to enter `echo '{"name":"Product Name","description":"Product Description"}' |http PUT :3000/`products`
* Update a category you will have to enter `echo '{"name":"Category Name","description":"Category Description"}' |http PUT :3000/categories`
* Delete a record you will have to enter `http DELETE :3000/products/<id>`
  
#### Tests
* How do you run tests?
    * tests are done with supergoose.
    * npm test
* What assertions were made?
    * get
    * post
    * put
    * delete
* What assertions need to be / should be made?
    * products route
    * categories route
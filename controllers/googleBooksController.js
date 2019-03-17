const db = require("../models");
var request = require('request');
const axios = require("axios");



// Defining methods for the booksController
module.exports = {
  findAllGoogleBooks: function (req, res) {
    //console.log(req.query.q);
    let query = req.query.q;

    const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=intitle:"+ query +"&printType=books"
    //console.log(BASE_URL);

    axios
    .get(BASE_URL)
    .then(function (response){ 
      //console.log(response.data.items[0])
      results = response.data.items;
      res.json(results);
    }
      //({ data: { results } }) => res.json(results)
      )
    .catch(err => res.status(422).json(err));

}
};

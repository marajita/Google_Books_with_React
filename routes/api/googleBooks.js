 const router = require("express").Router();
 const googleBooksController = require("../../controllers/googleBooksController");

 router
   .route("/")
   .get(googleBooksController.findAllGoogleBooks);
 module.exports = router;

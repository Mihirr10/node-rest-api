const express = require("express");
const router = express.Router();
const BookController = require("../controller/book");

router
  .route("/api/books")
  .get(BookController.getAllBooks)
  .post(BookController.addBook);

router
  .route("/api/books/:id")
  .get(BookController.getBookById)
  .patch(BookController.updateBook)
  .delete(BookController.deleteBook);

router.route("/books/:genre").get(BookController.getBookByGenre);

module.exports = router;

const Book = require("../model/book");

const getAllBooks = async (req, res) => {
  try {
    const getbooks = await Book.find({}).sort({ publicationYear: 1 });
    res.send(getbooks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const getBookById = async (req, res) => {
  try {
    const id = req.params.id;
    const getbook = await Book.findById(id);
    res.send(getbook);
  } catch (error) {
    res.status(404).json({ message: "book not found" });
    console.log(error);
  }
};

const addBook = async (req, res) => {
  try {
    const createBook = new Book(req.body);
    await createBook.save();
    res.send(createBook);
  } catch (error) {
    console.log(error);
    res.status(501).json({ msg: "server not found" });
  }
};

const updateBook = async (req, res) => {
  try {
    const id = req.params.id;
    const getbook = await Book.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.send(getbook);
  } catch (error) {
    res.status(404).json({ message: "book not found" });
    console.log(error);
  }
};

const deleteBook = async (req, res) => {
  try {
    const id = req.params.id;
    const getbook = await Book.findByIdAndDelete(id);
    res.send(getbook);
  } catch (error) {
    res.status(404).json({ message: "book not found" });
    console.log(error);
  }
};

const getBookByGenre = async (req, res) => {
  try {
    const genreTofind = req.params.genre;
    const getBookByAuthor = await Book.find({ genre: genreTofind });
    res.send(getBookByAuthor);
  } catch (error) {
    res.status(404).json({ message: "book not found" });
    console.log(error);
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
  getBookByGenre,
};

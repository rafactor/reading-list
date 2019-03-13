import axios from "axios";

export default {
  // Gets all books
  searchBooks: function(query) {
    let domain = "https://www.googleapis.com/books/v1/volumes?q="
    let url = domain + query

    return axios.get(url);
  },

  test: function() {
    return axios.get("/api/auth/test");
  },
  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // }
};

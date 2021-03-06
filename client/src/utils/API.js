import axios from "axios";
const server = ""

export default {
  // Gets all books
  searchBooks: function(query) {
    let domain = "https://www.googleapis.com/books/v1/volumes?q="
    let url = domain + query

    return axios.get(url);
  },

  saveBook: (bookData) => {
    return axios.post( "/api/books", bookData);
  },

  getBooks: () => {
    return axios.get( "/api/books/");
  },

   deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
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

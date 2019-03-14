import React, { Component } from "react";
import { BookList, SearchBox, BookListItem } from "../components/common/index";
import API from "../utils/API"

class Search extends Component {
  state = {
    search: "",
    results: [],
    listHeading: "Search Books"
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };



  saveBook = (bookData) => {
    API.saveBook(bookData)
    .then(res=> {
      console.log(res)
    })
    .catch(err => console.log(err))
  }


  
  handleFormSubmit = event => {
    event.preventDefault();
  
    API.searchBooks(this.state.search)
    .then(docs => {
      const result = {
          totalItems: docs.data.items.totalItems,
          count: docs.data.items.length,
          books: docs.data.items.map(doc => {
              return {
                  title: doc.volumeInfo.title,
                  description: doc.volumeInfo.description,
                  authors: doc.volumeInfo.authors,
                  image: doc.volumeInfo.imageLinks.thumbnail,
                  link: doc.volumeInfo.infoLink,
                  key: doc.id
              }
          })
      }
      this.setState({ results: result})
    })
    .catch(err => console.log(err));
  
  };

  render() {
    return (
      <div className="container">
        <SearchBox 
        state={this.state} 
        handleFormSubmit={this.handleFormSubmit} 
        handleInputChange={this.handleInputChange}
        />

      {this.state.results.books ?   
           <BookList listHeading={this.state.listHeading}>
                <BookListItem 
                books={this.state.results.books}
                saveBook={this.saveBook}
                />
          </BookList>
        : ""
      }
      </div>
    );
  }
}

export default Search;

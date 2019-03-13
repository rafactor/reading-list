import React, { Component } from "react";
import { BookList, SearchBox, BookListItem } from "../components/common/index";
import API from "../utils/API"

class Search extends Component {
  state = {
    search: "",
    results: [],
    listHeading: ""
  };

  searchBooks = () => {
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
                    link: doc.volumeInfo.infoLink
                }
            })
        }
        console.log(docs)
        console.log(result)

        this.setState({ results: result, listHeading: "Search Results" })
      }
       
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  loadBooks = () => {
      console.log(this.state.results)
  }
  
  handleFormSubmit = event => {
    event.preventDefault();
  
    this.searchBooks()
    // .then(this.loadBooks())
    // .then(console.log(this.state.results))

    // console.log(query)
    // if (this.state.title && this.state.author) {
    //   API.saveBook({
    //     title: this.state.title,
    //     author: this.state.author,
    //     synopsis: this.state.synopsis
    //   })
    //     .then(res => this.loadBooks())
    //     .catch(err => console.log(err));
    // }
  };

  render() {
    return (
      <div className="container">
        <SearchBox 
        state={this.state} 
        handleFormSubmit={this.handleFormSubmit} 
        handleInputChange={this.handleInputChange}
        />
        <BookList listHeading={this.state.listHeading}>
            <BookListItem 
                title={this.state.results.title}
                description={this.state.results.description}
                image={this.state.results.image}
                link={this.state.results.link}
                authors={this.state.results.authors}
            />

        </BookList>
      </div>
    );
  }
}

export default Search;

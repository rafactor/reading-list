import React, { Component } from "react";
import { BookList, BookListItem } from "../components/common/index"
import API from "../utils/API"
class Saved extends Component {
    state = {
        results: [],
        listHeading: "Saved Books"
      };

    componentDidMount(){
        this.loadbooks()
    }

    loadbooks = () => {
        API.getBooks()
        .then(docs => {
            console.log(docs)
            const result = {
                count: docs.data.length,
                books: docs.data.map(doc => {
                    return {
                        title: doc.title,
                        description: (doc.description) ? doc.description : "no description availble",
                        authors: (doc.authors) ? doc.authors : "author unknown",
                        image: doc.image,
                        link: doc.infoLink,
                        id: doc._id,
                        key: doc.id
                    }
                })
            }
            console.log(result)
            this.setState({ results: result })
        })
        .catch(err => {
            console.log(err)
        })
    }


    deleteBook = (id) => {
        // console.log(id)
        API.deleteBook(id)
        .then(res=> {
          console.log(res)
          this.loadbooks()
        })
        .catch(err => console.log(err))
      }
    

    render() {
        return (
            <div>
            {this.state.results.books ? 
                <div className="container">
                  <BookList listHeading={this.state.listHeading}>
                      <BookListItem 
                        books={this.state.results.books}
                        saveBook={this.saveBook}
                        deleteBook={this.deleteBook}
                        />             
                  </BookList>
                 </div>
            
            :
                <div>
                    "You don't have any book saved"
                </div>
           }
           </div>
          );
    }
}


export default Saved;
import React, { Component } from "react";
import { BookList, BookListItem } from "../components/common/index"
import NavBar from "../components/common/navbar"
import API from "../utils/API"
import 'materialize-css/dist/css/materialize.min.css'

import M from 'materialize-css';

class Saved extends Component {
    state = {
        results: {
            count: 0,
            books: [],
        },
        listHeading: "Saved Books"
      };

    componentDidMount(){
        // M.AutoInit();
        this.loadbooks()
    }

    loadbooks = () => {
        API.getBooks()
        .then(docs => {
            // console.log(docs)
            const result = {
                count: docs.data.length,
                books: docs.data.map(doc => {
                    return {
                        title: doc.title,
                        description: (doc.description) ? doc.description : "no description availble",
                        authors: (doc.authors) ? doc.authors : "author unknown",
                        image: doc.image,
                        link: doc.link,
                        id: doc._id,
                        key: doc.id
                    }
                })
            }
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
        console.log(this.state.results)
        // return(
        //     <div>
        //         <NavBar />   
        //         Test
        //     </div>
        // )
        return (
            <div>
            <NavBar />   
            
            {/* {(this.state.results.count > 0) ?  */}
                <div className="container">
                  <BookList listHeading={this.state.listHeading}>
                      <BookListItem 
                        books={this.state.results.books}
                        saveBook={this.saveBook}
                        deleteBook={this.deleteBook}
                        listHeading={this.state.listHeading}
                        />             
                  </BookList>
                 </div>
            
            {/* :
                <div className="book-list__empty">
                    You don't have any book saved
                </div>
           } */}
           </div>
          );
    }
}


export default Saved;
import React from "react";

export function BookList(props) {
        return (
             <div className="books-list">
                    <h6 className="books-list-heading">{props.listHeading}</h6>
                    <ul className="collection">{props.children}</ul>
             </div>
            )        
}

export function BookListItem(props){
    console.log(props.books)
    return (
        <div>
        {props.books.map(book => (
            <li className={`books-item ${book.key}`} >
                            <div className="row">
                                <div className="col s10">
                                    <h6 className={`books-item__title ${book.key}`}>{book.title}</h6>
                                    <p className="books-item__authors">{(book.authors) ? `by ${book.authors}` : null }</p>
                                </div>
                                <div className="col s2">
                                    <a className="waves-effect waves-light btn"
                                        href={book.link}
                                        target="_blank"
                                    >View</a>
                                    {(book.listHeading === "Saved Books") ? 
                                        <a className="waves-effect waves-light btn-small"
                                        onClick={e => props.saveBook(book)}
                                        >Save
                                        {/* <i className="material-icons left">Save</i> */}
                                        </a>
                                     :
                                        <a className="waves-effect waves-light btn-small"
                                        onClick={e => props.deleteBook(book.id)}
                                        >Delete
                                        {/* <i className="material-icons left">Save</i> */}
                                        </a>

                                }
                                    
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s4">
                                    <img className="books-item__image" src={book.image} />
                                </div>
                                <div className="col s8">
                                    <p className="books-item__description">{book.description}</p>
                                </div>
                            </div>
                        </li>
        ))}
        
        </div>
    )
}
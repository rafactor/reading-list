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
    console.log(props.listHeading)
    return (
        <div>
        {props.books.map(book => (
            <li className={`books-item ${book.key}`} >
                            <div className="row">
                                <div className="col s8">
                                    <h6 className={`books-item__title ${book.key}`}>{book.title}</h6>
                                    <p className="books-item__authors">{(book.authors) ? `by ${book.authors}` : null }</p>
                                </div>
                                <div className="col s4">
                                    <a className="waves-effect waves-light btn-small"
                                        href={book.link}
                                        target="_blank"
                                        // rel="noopener noreferrer"
                                    >View</a>
                                    {(props.listHeading !== "Saved Books") ? 
                                        <button className="waves-effect waves-light btn-small"
                                        onClick={e => props.saveBook(book)}
                                        >Save
                                        {/* <i className="material-icons left">save</i> */}
                                        </button>
                                     :
                                        <button className="waves-effect waves-light btn-small"
                                        onClick={e => props.deleteBook(book.id)}
                                        >Delete
                                        {/* <i className="material-icons left">Save</i> */}
                                        </button>

                                }
                                    
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s4">
                                    <img className="books-item__image" alt="book cover" src={book.image} />
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
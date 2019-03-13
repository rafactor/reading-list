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
    return (
        <li className="saved-books__item">
                            <div className="row">
                                <div className="col s10">
                                    <h3>{props.title}</h3>
                                    <p>{props.authors}</p>
                                </div>
                                <div className="col s2">
                                    <a className="waves-effect waves-light btn">View</a>
                                    <a className="waves-effect waves-light btn-small">
                                    <i className="material-icons left">Delete</i>
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s4">
                                    <img src={props.image} />
                                </div>
                                <div className="col s8">
                                    <p>{props.description}</p>
                                </div>
                            </div>
                        </li>
    )
}
import React from 'react'
import './App.css'
// import * as api from './BooksAPI'
import Book from './Book'

class Bookshelf extends React.Component {
    state = {
        title: undefined,
    }

    getImageURL = (book) => {
        if (book.imageLinks) {
            return book.imageLinks.thumbnail
        }
    }

    render() {
        const { title, list } = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {list && list.map((book) => (
                            <li key={book.id}>
                                <Book
                                    data={book}
                                    id={book.id}
                                    title={book.title}
                                    authors={book.authors}
                                    imageURL={`url("${this.getImageURL(book)}")`}
                                    shelf={book.shelf}
                                    onChangeShelf={this.props.onChangeShelf}
                                />
                            </li>
                        )
                        )}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Bookshelf
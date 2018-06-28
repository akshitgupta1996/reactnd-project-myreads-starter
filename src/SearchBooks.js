import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'


class SearchBooks extends React.Component {
    state = {
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        books: undefined,
        query: '',
        validated: false,
    }

    componentWillMount() {
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query
        }))
    }

    filterBooks(query) {
        BooksAPI.search(this.state.query).then(response => {
            if (response) {
                if (!response.error) {
                    this.setState({
                        books: response,
                        validated: true,
                    })
                }
                else {
                    this.setState({ validated: false, })
                }
            }
        })
    }

    getImageURL = (book) => {
        if (book.imageLinks) {
            return book.imageLinks.thumbnail
        }
    }

    render() {
        const { books, query, validated } = this.state
        this.filterBooks(query)
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {validated && books && books.map((book) => (
                            <li key={book.id}>
                                <Book
                                    id={book.id}
                                    title={book.title}
                                    authors={book.authors}
                                    imageURL={`url("${this.getImageURL(book)}")`}
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

export default SearchBooks

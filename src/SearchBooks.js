import React from 'react'
import './App.css'
import * as api from './BooksAPI'
import { Link } from 'react-router-dom'

class SearchBooks extends React.Component {
    state = {
      /**
       * TODO: Instead of using this state variable to keep track of which page
       * we're on, use the URL in the browser's address bar. This will ensure that
       * users can use the browser's back and forward buttons to navigate between
       * pages, as well as provide a good URL they can bookmark and share.
       */
      books: undefined,
      currentlyReadingBooks: undefined,
      wantToReadBooks: undefined,
      readBooks: undefined,
      noneBooks: undefined,
      showSearchPage: true
    }
  
    componentWillMount() {
      api.getAll().then(response => {
        if (response) {
          this.setState({ 
            books: response,
            currentlyReadingBooks: response.filter(book => book.shelf==='currentlyReading'),
            wantToReadBooks: response.filter(book => book.shelf==='wantToRead'),
            readBooks: response.filter(book => book.shelf==='read'),
            noneBooks: response.filter(book => book.shelf==='none')
          })
        }
      })
    }
  
    render() {
      // console.log(this.state)
      return (
            <div className="search-books">
              <div className="search-books-bar">
              <Link to='/' className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                  <input type="text" placeholder="Search by title or author" />
  
                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid"></ol>
              </div>
            </div>
      )
    }
  }
  
  export default SearchBooks
  
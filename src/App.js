import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks';
import ListBooks from './ListBooks';

// import Book from './Book'

class BooksApp extends React.Component {
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
    showSearchPage: false
  }

  componentWillMount() {
    BooksAPI.getAll().then(response => {
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
      <div className="app">
      
      <Route exact path='/' render={() => (
        <ListBooks 
          books={this.state.books}
          currentlyReadingBooks={this.state.currentlyReadingBooks}
          wantToReadBooks={this.state.wantToReadBooks}
          readBooks={this.state.readBooks}
          noneBooks={this.state.noneBooks}
          />
      )}/>

      <Route path='/search' component={SearchBooks}/>
      
      </div>
    )
  }
}

export default BooksApp

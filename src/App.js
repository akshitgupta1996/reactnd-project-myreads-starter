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
    books: [],
  }

  componentDidMount() {
    this.buildState()
  }

  buildState = () => {
    BooksAPI.getAll().then(response => {
      if (response) {
        this.setState({
          books: response,
        })
      }
    })
  }


  upadateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(this.buildState);

    this.setState((currentState) => ({
      books: currentState.books.filter((b) => {
        if (b.id === book.id) {
          b.shelf = shelf
          return true
        }
        else
          return true
      })
    }));
  }

  searchBook = (query) => {
    BooksAPI.search(query)
  }

  render() {

    const currentlyReadingBooks = this.state.books.filter(book => book.shelf === 'currentlyReading');
    const wantToReadBooks = this.state.books.filter(book => book.shelf === 'wantToRead');
    const readBooks = this.state.books.filter(book => book.shelf === 'read');


    return (
      <div className="app">

        <Route exact path='/' render={() => (
          <ListBooks
            books={this.state.books}
            onChangeShelf={this.upadateBook}
            currentlyReadingBooks={currentlyReadingBooks}
            wantToReadBooks={wantToReadBooks}
            readBooks={readBooks}
          />
        )} />

        <Route path='/search' render={() => (
          <SearchBooks
            books={this.state.books}
            onChangeShelf={this.upadateBook}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp

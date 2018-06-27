import React from 'react'
import './App.css'
import Bookshelf from './Bookshelf'
import { Link } from 'react-router-dom'

class ListBooks extends React.Component {

  state = {}

  componentWillMount() {}

  render() {
    return (
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf title={'Current Reading'} list={this.props.currentlyReadingBooks}/>
            <Bookshelf title={'Want to Read'} list={this.props.wantToReadBooks}/>
            <Bookshelf title={'Read'} list={this.props.readBooks}/>
          </div>
        </div>
        <Link to='/search' className='open-search-link'>Add a Book</Link>
      </div>
    )
  }
}

export default ListBooks

import React from 'react'
import './App.css'
import Bookshelf from './Bookshelf'
import { Link } from 'react-router-dom'

class ListBooks extends React.Component {
    render() {
        const { currentlyReadingBooks, wantToReadBooks, readBooks, onChangeShelf } = this.props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Bookshelf title={'Current Reading'} list={currentlyReadingBooks} onChangeShelf={onChangeShelf} />
                        <Bookshelf title={'Want to Read'} list={wantToReadBooks} onChangeShelf={onChangeShelf} />
                        <Bookshelf title={'Read'} list={readBooks} onChangeShelf={onChangeShelf} />
                    </div>
                </div>
                <Link to='/search' className='open-search-link'>Add a Book</Link>
            </div>
        )
    }
}

export default ListBooks

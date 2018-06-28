import React from 'react'
import './App.css'
// import * as BooksAPI from './BooksAPI'

class Book extends React.Component {
    state = {
        title: undefined,
        authors: undefined,
        imageURL: undefined,
        width: undefined,
        height: undefined,
        value: 'move',
    }

    componentDidMount() {
        // if (this.props.)
    }

    // changeShelf(book, shelf) {
    //     console.log(book);
    //     console.log(shelf);
    //     this.setState({ value: shelf });
    //     BooksAPI.update(book, shelf);
    // }

    render() {
        const { data, title, authors, imageURL, shelf } = this.props;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: '100%', backgroundImage: imageURL }}></div>
                    <div className="book-shelf-changer">
                        <select value={shelf} onChange={(event) => this.props.onChangeShelf(data, event.target.value)}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors}</div>{//.map(t => <span key={t}>{t}</span>).reduce((prev, curr) => [prev, ', ', curr])
                }
            </div>
        )
    }
}

export default Book
import React from 'react'
import './App.css'

class Book extends React.Component {
    state = {
        title: undefined,
        authors: undefined,
        imageURL: undefined,
        width: undefined,
        height: undefined,
    }

    render() {
        const { title, authors, imageURL} = this.props;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: '100%', backgroundImage: imageURL }}></div>
                    <div className="book-shelf-changer">
                        <select>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors.map(t => <span key={t}>{t}</span>).reduce((prev, curr) => [prev, ', ', curr])}</div>
            </div>
        )
    }
}

export default Book
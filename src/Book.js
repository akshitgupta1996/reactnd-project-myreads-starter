import React from 'react'
import './App.css'

class Book extends React.Component {
    state = {
        shelf: 'none',
    }

    componentDidMount() {
        if (this.props.shelf) {
            this.setState({
                shelf: this.props.shelf,
            })
        }
    }

    render() {
        const { data, title, authors, imageURL } = this.props;
        const { shelf } = this.state;
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
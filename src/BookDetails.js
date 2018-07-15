import React, { Component } from 'react';

class BookDetails extends Component {

    render() {
        const { bookImageUrl, bookTitle, bookAuthor } = this.props
        return (
            <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${bookImageUrl})`
                    }}>
                </div>
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
                <div className="book-title">{bookTitle}</div>
                <div className="book-authors">{bookAuthor}</div>
            </div>
        )
    }

}

export default BookDetails
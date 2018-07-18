import React, { Component } from 'react'

class BookshelfChanger extends Component {

    render() {
        const { book, updateBooks } = this.props
        return (
            <div className="book-shelf-changer">
                <select value={'move'} onChange={(event) => updateBooks(book, event.target.value)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}
export default BookshelfChanger
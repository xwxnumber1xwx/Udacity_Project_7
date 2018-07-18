import React, { Component } from 'react'
import BookshelfChanger from './BookshelfChanger'

class BookDetails extends Component {

    render() {
        const { book, updateBooks } = this.props
        if(book) {
        return (
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                        }}>
                        </div>
                        <BookshelfChanger
                            book={book}
                            updateBooks={updateBooks} />
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            )
        }
    }
}

export default BookDetails
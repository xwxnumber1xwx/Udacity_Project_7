import React from 'react'
import BookshelfChanger from './BookshelfChanger'
import PropTypes from 'prop-types'

function BookDetails(props) {
    const { book, updateBooks, books } = props
    //prevents crash if no title or authors are available
    const title = book.title ? (book.title) : ('No title available')
    const authors = book.authors ? (book.authors) : ('No authors available')
    const style = book.imageLinks ? ({ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` })
        : ({ width: 128, height: 193 })

    if (book) {
        return (
            <div className="book">
                <div className="book-top">
                        <div className="book-cover" style={ style }> </div>
                    < BookshelfChanger
                        book={book}
                        updateBooks={updateBooks}
                        books={books}
                    />
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors}</div>
            </div>
        )
    }
}

//Check if the Type of variables are correct
BookDetails.propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    updateBooks: PropTypes.func.isRequired
}

export default BookDetails
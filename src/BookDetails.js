import React, { Component } from 'react'
import BookshelfChanger from './BookshelfChanger'
import PropTypes from 'prop-types'

class BookDetails extends Component {

    //Check if the Type of variables are correct
    static propTypes = {
        book: PropTypes.object.isRequired,
        books: PropTypes.array.isRequired,
        updateBooks: PropTypes.func.isRequired
        }

    render() {
        const { book, updateBooks, books } = this.props
        //prevents crash if no title or authors are available
        const title = book.title ? (book.title) : ('No title available')
        const authors = book.authors ? (book.authors) : ('No authors available')
        console.log(book)
        if (book) {
            return (
                <div className="book">
                    <div className="book-top">
                        {book.imageLinks ? (
                            <div className="book-cover" style={{
                                width: 128,
                                height: 193,
                                backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                            }}>
                            </div>
                        ) : (
                                <div className="book-cover" style={{
                                    width: 128,
                                    height: 193
                                }}>
                                </div>
                            )}
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
}

export default BookDetails
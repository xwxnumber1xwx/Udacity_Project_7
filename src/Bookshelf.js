import React, { Component } from 'react'
import BookDetails from './BookDetails'
import PropTypes from 'prop-types'

class Bookshelf extends Component {

    //Check if the Type of variables are correct
    static propTypes = {
        books: PropTypes.array.isRequired,
        updateBooks: PropTypes.func.isRequired,
        BookshelfName: PropTypes.string.isRequired
        }

    render() {
        const { BookshelfName, updateBooks, books } = this.props
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{BookshelfName}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book) => (
                            <li key={book.id}>
                                <BookDetails
                                    book={book}
                                    updateBooks={updateBooks}
                                    books={books}
                                />
                            </li>
                        )
                        )}
                    </ol>
                </div>
            </div>

        )
    }
}

export default Bookshelf
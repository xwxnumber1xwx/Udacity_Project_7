import React, { Component } from 'react'
import BookDetails from './BookDetails'

class Bookshelf extends Component {

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
import React, { Component } from 'react';
import BookDetails from './BookDetails'
import * as BooksAPI from './BooksAPI'

class Bookshelf extends Component {

    state = {
        books: []
    }

    componentWillMount() {
        BooksAPI.getAll().then((books) => {
            let booksFiltered = books.filter(
                (book) => book.shelf.toUpperCase() === this.props.BookshelfName.replace(/\s/g, '').toUpperCase())
            this.setState({ books: booksFiltered })
        }
      )}

    render() {

        const { BookshelfName } = this.props
        const { books } = this.state
        return(
            <div className="bookshelf">
                  <h2 className="bookshelf-title">{BookshelfName}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {books.map((book) => (
                        <li key={book.ID}>
                            <BookDetails
                                bookImageUrl={book.imageLinks.smallThumbnail}
                                bookTitle={book.title}
                                bookAuthor={book.authors}
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
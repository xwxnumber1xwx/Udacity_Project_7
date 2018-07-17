import React, { Component } from 'react';
import BookDetails from './BookDetails';

class SearchResults extends Component {
    render() {
        const { books, updateBooks } = this.props
        return (
            <div className="search-books-results">
                <ol className="books-grid">
                    {books.map((book) => (
                        <li key={book.id}>
                            <BookDetails
                                book={book}
                                updateBooks={updateBooks}
                            />
                        </li>))}
                </ol>
            </div>
        )
    }
}

export default SearchResults
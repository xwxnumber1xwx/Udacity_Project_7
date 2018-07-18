import React, { Component } from 'react'
import BookDetails from './BookDetails'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import sortBy from 'sort-by'

class SearchResults extends Component {

    state = {
        query: '',
        bookList: []
    }

    updateQuery = (query) => {
        this.setState({ query })

        if (query) {
            BooksAPI.search(query).then(results => {
                this.setState({ bookList: results })
                console.log(results)
                console.log(query)
            })
        }
        else
            this.setState({ bookList: [] })

        if(this.state.bookList.length > 0)
        this.state.bookList.sort(sortBy('title'))
        }

    render() {
        const { updateBooks } = this.props
        const { query, bookList } = this.state

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                    */
                        }
                        <input type="text" value={query}
                            onChange={(event) => { this.updateQuery(event.target.value) }}
                            placeholder="Search by title or author" />
                    </div>
                </div>
                <div className="search-books-results">
                    {bookList.length > 0 && (
                        <ol className="books-grid">
                            {bookList.map((book) => (
                                <li key={book.id}>
                                    <BookDetails
                                        book={book}
                                        updateBooks={updateBooks}
                                    />
                                </li>))}
                        </ol>
                    )}
                </div>
            </div>
        )
    }
}

export default SearchResults
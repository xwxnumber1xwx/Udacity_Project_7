import React from 'react'
import * as BooksAPI from './BooksAPI'
import Bookshelf from './Bookshelf'
import './App.css'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import SearchResults from './SearchResults'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  }

  //Get all the Books from the server
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      console.log(this.state.books)
    })
  }

  //update a book if the bookshelf is changed
  updateBooks = (updatedBook, newBookShelf) => {
    BooksAPI.update(updatedBook, newBookShelf)
      .then(() => {
        updatedBook.shelf = newBookShelf
        let oldBooks = this.state.books.filter(book => book.id !== updatedBook.id)
        oldBooks.push(updatedBook)
        this.setState({ books: oldBooks })
      })
  }

  render() {
    const { books } = this.state

    return (
      <div className="app">

        <Route path='/search' render={({ history }) => (
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
                <input type="text" placeholder="Search by title or author" />
              </div>
            </div>
            <SearchResults
              books={books}
              updateBooks={(updatedBook, newBookShelf) => {
                this.updateBooks(updatedBook, newBookShelf)
                history.push('/')
              }}
            />
          </div>
        )} />

        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf BookshelfName='Currently Reading' books={books.filter((book) => book.shelf === 'currentlyReading')} updateBooks={this.updateBooks} />
                <Bookshelf BookshelfName='Want to Read' books={books.filter((book) => book.shelf === 'wantToRead')} updateBooks={this.updateBooks} />
                <Bookshelf BookshelfName='Read' books={books.filter((book) => book.shelf === 'read')} updateBooks={this.updateBooks} />
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
        )}
        />
      </div>
    )
  }
}

export default BooksApp

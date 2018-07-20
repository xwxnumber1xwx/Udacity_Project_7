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
    })
  }

  //update a book if the bookshelf is changed
  updateBooks = (updatedBook, newBookShelf) => {
    BooksAPI.update(updatedBook, newBookShelf)
      .then(() => {
        updatedBook.shelf = newBookShelf
        this.setState((state) => ({
          books: state.books.filter(book => book.id !== updatedBook.id).concat(updatedBook)
        })
        )
      })
  }

  render() {
    const { books } = this.state

    return (
      <div className="app">
        <Route path='/search' render={({ history }) => (
          <SearchResults
            books={books}
            updateBooks={(updatedBook, newBookShelf) => {
              this.updateBooks(updatedBook, newBookShelf)
              history.push('/')
            }}
          />
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

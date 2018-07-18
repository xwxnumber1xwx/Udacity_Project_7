import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookshelfChanger extends Component {
    //Check if the Type of variables are correct
    static propTypes = {
        book: PropTypes.object.isRequired,
        books: PropTypes.array.isRequired,
        updateBooks: PropTypes.func.isRequired
      }

    //check if the book is already in the bookshelf
    checkShelf(bookToCheck) {
        const found = this.props.books.find(b => b.id === bookToCheck.id);
        if (found) {
            return found;
        } else {
            return 'none'
        }
    }
    render() {
        const { book, updateBooks } = this.props
        let FoundedBookShelf = this.checkShelf(book)
        return (
            // value is disabled if the book is already in the same bookshelf
            <div className="book-shelf-changer">
                <select value={FoundedBookShelf.shelf} onChange={(event) => updateBooks(book, event.target.value)}>
                    <option value="move" disabled>Move to...</option>
                    {FoundedBookShelf.shelf === 'currentlyReading' ? (
                        <option value="currentlyReading" disabled>Currently Reading</option>)
                        : (<option value="currentlyReading">Currently Reading</option>)}
                    {FoundedBookShelf.shelf === 'wantToRead' ? (
                        <option value="wantToRead" disabled>Want to Read</option>)
                        : (<option value="wantToRead">Want to Read</option>)}
                    {FoundedBookShelf.shelf === 'read' ? (
                        <option value="read" disabled>Read</option>)
                        : (<option value="read">Read</option>)}
                    {FoundedBookShelf.shelf !== undefined && (
                        <option value="none">None</option>)}
                </select>
            </div>
        )
    }
}
export default BookshelfChanger
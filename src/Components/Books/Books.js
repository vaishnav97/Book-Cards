import React, { Component } from 'react';
import request from 'superagent';
import SearchArea from './SearchArea';
import BookList from './BookList';

class Books extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: [],
            searchField: '',
            sort: '',
        };
    }

    handleSearch = (e) => {
        this.setState({
            searchField: e.target.value,
        });
    };

    handleSort = (e) => {
        this.setState({
            sort: e.target.value,
        });
    };

    cleanData = (data) => {
        const newData = data.body.items.map((book) => {
            if (book.volumeInfo.hasOwnProperty('publishedDate') === false) {
                book.volumeInfo['publishedDate'] = '0000';
            } else if (book.volumeInfo.hasOwnProperty('imageLinks') === false) {
                book.volumeInfo['imageLinks'] = { thumbnail: 'https://uh.edu/pharmacy/_images/directory-staff/no-image-available.jpg' };
            }

            return book;
        });

        return newData;
    };

    searchBook = (e) => {
        e.preventDefault();

        request
            .get('https://www.googleapis.com/books/v1/volumes')
            .query({ q: this.state.searchField })
            .then((data) => {
                const cleanedData = this.cleanData(data);
                this.setState({
                    books: cleanedData,
                });
            });
    };

    render() {
        const sortedBooks = this.state.books.sort((a, b) => {
            const date1 = parseInt(a.volumeInfo.publishedDate.substring(0, 4));
            const date2 = parseInt(b.volumeInfo.publishedDate.substring(0, 4));

            return this.state.sort === 'Newest' ? date2 - date1 : date1 - date2;
        });

        return (
            <div>
                <SearchArea handleSearch={this.handleSearch} searchBook={this.searchBook} handleSort={this.handleSort} />
                <BookList books={sortedBooks} />
            </div>
        );
    }
}

export default Books;

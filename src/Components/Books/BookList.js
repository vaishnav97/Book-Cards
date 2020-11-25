import React from 'react';
import BookCard from './BookCard';

const BookList = (props) => {
    const { books } = props;
    return (
        <div className="list">
            {books.map((book) => (
                <BookCard
                    key={book.id}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    title={book.volumeInfo.title}
                    authors={book.volumeInfo.authors}
                    publishedDate={book.volumeInfo.publishedDate}
                />
            ))}
        </div>
    );
};

export default BookList;

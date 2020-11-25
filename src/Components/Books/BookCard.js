import React from 'react';

const BookCard = (props) => {
    const { image, title, authors, publishedDate } = props;
    const author = authors.join();

    return (
        <div className="card-container">
            <img src={image} alt="" />
            <div className="desc">
                <h2>{title}</h2>
                <h3>
                    <strong>Author: </strong>
                    {author}
                </h3>
                <p>
                    <strong>Published: </strong>
                    {publishedDate === '0000' ? 'Not Available' : publishedDate.substring(0, 4)}
                </p>
            </div>
        </div>
    );
};

export default BookCard;

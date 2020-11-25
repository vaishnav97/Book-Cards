import React from 'react';

const SearchArea = (props) => {
    const { handleSearch, searchBook, handleSort } = props;

    return (
        <div className="search-area">
            <form onSubmit={searchBook} action="">
                <input type="text" onChange={handleSearch} />
                <button type="submit">Search</button>
                <select defaultValue="Sort" onChange={handleSort}>
                    <option disabled value="Sort">
                        Sort
                    </option>
                    <option value="Newest">Newest</option>
                    <option value="Oldest">Oldest</option>
                </select>
            </form>
        </div>
    );
};

export default SearchArea;

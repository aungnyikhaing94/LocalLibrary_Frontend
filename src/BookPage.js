import React, { useState } from "react";
import Book from "./Book";
import axios from "axios";

const containerStyle = {
    display: 'flex',
    flexDirection: 'column', // display child elements vertically
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
};

const boxStyle = {
    width: 'auto',
    height: 'auto',
    border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px',
};

const buttonStyle = {
    position: 'absolute',
    top: '10px',
    left: '10px',
    border: '1px solid #ff6550',
    padding: '10px', 
    backgroundColor: '#f6ecec',
};

function BookPage() {
    const [books, setBooks] = useState([]);
    const [country, setCountry] = useState({});

    const handleClick = async () => {
        try {
            const countryResponse = await axios.get("http://localhost:8080/getRandomCountry");
            const countryCode = countryResponse.data.country_code;
            setCountry(countryResponse.data);
            const booksResponse = await axios.get(`http://localhost:8080/getTop3ReadBooks?country_code=${countryCode}`);
            setBooks(booksResponse.data);
          } catch (error) {
            console.error(error);
          }
    };

    if (books.length > 0) {
        return (
            <div style={containerStyle}>
                <button id="action-btn" onClick={handleClick} style={buttonStyle}>Get Country: {country.country_code}</button>
                <div id="container" style={boxStyle}>
                    {books.map((book, index) => (
                        <Book key={index} book={book} sequence={index + 1} />
                    ))}
                </div>
            </div>
        );
    } else {
        return (
            <div style={containerStyle}>
                <button id="action-btn" onClick={handleClick} style={buttonStyle}>Get Country</button>
                <div id="error-message" style={boxStyle}>
                    No data found.
                </div>
            </div>
        );
    }


}

export default BookPage;

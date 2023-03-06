import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

const divStyle = {
  margin: '5px',
  padding: '10px',
  backgroundColor: '#f6ecec',
  width: '200px',
  height: '45px',
  borderRadius: '7px',
  boxShadow: '1px 2px 2px 0px rgba(0,0,0,0.51)',
};

const sequenceStyle = {
  display: 'inline-block',
  float: "left",
  paddingTop: '10px',
  paddingLeft: '10px',
}

const bookNameStyle = {
  textAlign: 'center',
  marginTop: '10px',
  marginBottom: '2px'
}

const authorNameStyle = {
  fontSize: '8px',
  float: 'right',
  marginTop: '2px',
  marginBottom: '10px'
}

const customerStyle = {
  width: 'auto',
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '1px',
}

const customerChildDivStyle = {
  margin: '5px',
  padding: '5px',
  width: '160px',
  height: '35px',
  borderRadius: '7px',
  textAlign: 'center',
  backgroundColor: '#f4cfcf',
  boxShadow: '1px 2px 2px 0px rgba(0,0,0,0.35)',
}

const arrowStyle = {
  fontSize: '13px',
  float: 'right',
  paddingRight: '10px',
  color: '#d47171',
}

function Book(props) {
  const { name, author, borrowers } = props.book;
  const bookDivId = "book-item-" + props.sequence;
  const [expanded, setExpanded] = useState(false);

  const showHideHandler = () => {
    setExpanded(!expanded);
  };

  return (
    <div>

      <div id={bookDivId} style={divStyle}>
        <span style={sequenceStyle}>{props.sequence}</span>
        <p style={bookNameStyle}>
          {name} <span onClick={showHideHandler}>{expanded ? <FontAwesomeIcon icon={faChevronDown} style={arrowStyle} /> : <FontAwesomeIcon icon={faChevronUp} style={arrowStyle} />}</span>
        </p>
        <p style={authorNameStyle}>By {author}</p>
      </div>

      {expanded &&
        <div style={customerStyle}>
          {borrowers.map((borrower, index) => (
            <div style={customerChildDivStyle}>
              <span key={index} style={{ display: 'inline-block', paddingTop: '5px' }}>{borrower}</span>
            </div>
          ))}
        </div>
      }

    </div>
  );
}

export default Book;
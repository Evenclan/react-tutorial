import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResults.scss';
import Card from '../Card/Card.js';
import Container from '../Container/Container.js';
import { Link } from 'react-router-dom';

const SearchResults = ({ cards }) => {
  console.log(cards);
  return (
    <Container>
      <section className={styles.component}>
        <h1 className={styles.title}>Your search results:</h1>
        {cards.map((cardData) => (
          <div key={cardData.id}>
            <Card key={cardData.id} {...cardData} />
            <Link to={`/list/${cardData.listId}`}>
              <p>Search results here</p>
            </Link>
          </div>
        ))}
      </section>
    </Container>
  );
};


SearchResults.propTypes = {
  cards: PropTypes.array,
};

export default SearchResults;

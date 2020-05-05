import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

class Card extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
    title: PropTypes.string.isRequired,
  };

  render() {
    // const {title} = this.props;
    return <article className={styles.component}>{this.props.title}</article>;
  }
}

export default Card;

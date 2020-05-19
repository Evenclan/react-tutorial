import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import { getCardsForSearch } from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => {
  const searchString = props.match.params.id;

  return {
    cards: getCardsForSearch(state, searchString ),
  };
};

export default connect(mapStateToProps)(SearchResults);

// import shortid from 'shortid';

// selectors

export const getSearchString = ({searchString}) => searchString;

// countVisible: 

export const countVisibleCards = ({cards, searchString}) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).length;

// countAll:

export const countAllCards = ({cards}) => cards.length;


// action name creator

const reducerName = 'searchString';
const createActionName = name => `app/${reducerName}/${name}`;

// actions types1

// createAction_changeSearchString
export const CHANGE = createActionName('CHANGE');

// action creators

export const createAction_changeSearchString = payload => ({ payload, type: CHANGE });

// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case CHANGE:
      return action.payload;
    default:
      return statePart;
  }
}
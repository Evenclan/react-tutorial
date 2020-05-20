import shortid from 'shortid';

// selectors
export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);
// export const getCardsForSearch = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);
export const getCardsForSearch = ({ cards, columns, lists} , searchString) => cards.filter(card => new RegExp(searchString, 'i').test(card.title)).map(card => ({
  ...card,
  listId: lists.find(list => list.id === columns.find(col => col.id === card.columnId).listId).id,
}));

//The test() method executes a search for a match between a regular expression and a specified string. Returns true or false.

// action name creator
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_CARD = createActionName('ADD_CARD');

// action creators
export const createActionAddCard = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_CARD });

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [...state, action.payload];
    default:
      return state;
  }
}
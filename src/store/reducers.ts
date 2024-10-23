// src/store/reducers.ts
import { Book } from '../types'; // Ensure this path matches your structure

interface BookState {
  bookData: Book[];
}

const initialState: BookState = {
  bookData: [],
};

// Define action types
const SET_BOOK_DATA = 'SET_BOOK_DATA';

// Action type definition
interface SetBookDataAction {
  type: typeof SET_BOOK_DATA;
  payload: Book[];
}

// Define action creator
export const setBookData = (books: Book[]): SetBookDataAction => ({
  type: SET_BOOK_DATA,
  payload: books,
});

// Reducer function
export const bookReducer = (state = initialState, action: SetBookDataAction): BookState => {
  switch (action.type) {
    case SET_BOOK_DATA:
      return { ...state, bookData: action.payload };
    default:
      return state;
  }
};

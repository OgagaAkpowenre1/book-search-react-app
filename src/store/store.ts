// src/store/store.ts
import { createStore } from 'redux';
import { bookReducer } from './reducers'; // Import the reducer we will create later

const store = createStore(bookReducer);

export default store;

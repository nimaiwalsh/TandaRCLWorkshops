import { createStore } from 'redux';
/*Redux Persist*/
import { persistStore, persistReducer } from 'redux-persist'; 
import storage from 'redux-persist/lib/storage';

const initialState = { token: null, username: null };

const reducer = (state, action) => {
  switch (action.type) {
    case 'login_success':
      return {
        token: action.payload.token,
        userName: action.payload.userName
      };
    case 'posts':
      return {
        ...state,
        posts: {
          postCount: action.payload.count,
          post: action.payload.items
        }
      };
    case 'logout':
      return {
        ...state, 
        token: null,
      }
    default:
      return state;
  }
  return state;
};

/*Persist Redux*/
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = createStore(
  persistedReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store)

// export default store;

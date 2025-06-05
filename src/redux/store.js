import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
// import contactsReducer from "./reducers/contact/slice";
// import filtersReducer from "./reducers/filters/slice";
import appReducers from "./reducers";

// Redux Persist yapılandırması

const rootReducer = combineReducers({
  contacts: appReducers.contacts,
  filters: appReducers.filters,
});

export const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);

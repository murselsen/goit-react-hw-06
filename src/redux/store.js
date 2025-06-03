import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import contactsReducer from "./reducers/contact/slice";
import filtersReducer from "./reducers/filters/slice";

// Redux Persist yapılandırması

let store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
console.log("store", store.getState());

let persistor = persistStore(store);
console.log("persistor", persistor);

export { store, persistor };

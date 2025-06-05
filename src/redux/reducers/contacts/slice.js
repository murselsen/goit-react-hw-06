import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const initialValues = {
  items: [],
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialValues,
  reducers: {
    addContact: (state, action) => {
      state.items.push({ id: state.items.length, ...action.payload });
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload.id
      );
    },
  },
});

const contactsPersistConfig = {
  key: "contacts", // Local storage'da kullanılacak anahtar
  storage, // Depolama yöntemi (localStorage)
  // whitelist: ["items"], // Sadece items dizisini persist et
};

// Persist edilmiş reducer oluştur
const persistedContactsReducer = persistReducer(
  contactsPersistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;
export default persistedContactsReducer;

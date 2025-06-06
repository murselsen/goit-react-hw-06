import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const initialValues = {
  items: [
    { id: "id-1", name: "Rosie Simpson", phone: "4591256" },
    { id: "id-2", name: "Hermione Kline", phone: "4438912" },
    { id: "id-3", name: "Eden Clements", phone: "6451779" },
    { id: "id-4", name: "Annie Copeland", phone: "227-91-26" },
  ],
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
  whitelist: ["items"], // Sadece items dizisini persist et
};

// Persist edilmiş reducer oluştur
const persistedContactsReducer = persistReducer(
  contactsPersistConfig,
  contactsSlice.reducer
);

export const selectContacts = (state) => {
  if (state.filters.search) {
    return state.contacts.items.filter((contact) =>
      contact.name.toLowerCase().includes(state.filters.search.toLowerCase())
    );
  }
  return state.contacts.items;
};
export const { addContact, deleteContact } = contactsSlice.actions;
export default persistedContactsReducer;

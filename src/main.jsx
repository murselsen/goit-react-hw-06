import { Provider } from "react-redux";

import { createRoot } from "react-dom/client";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import App from "./App.jsx";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={<p>Data loading...</p>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);

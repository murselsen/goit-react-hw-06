import contactReducer from "./contact/slice";
import filtersReducer from "./filters/slice";

const rootReducer = {
  contact: contactReducer,
  filters: filtersReducer,
};

export default rootReducer;

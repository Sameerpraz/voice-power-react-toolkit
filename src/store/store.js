import { configureStore } from "@reduxjs/toolkit";
import expenseTrackerReducer from "./expenseTrackerSlice";
const store = configureStore({
  reducer: {
    expenseTracker: expenseTrackerReducer,
  },
});

export default store;

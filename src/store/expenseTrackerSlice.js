import { createSlice, current } from "@reduxjs/toolkit";
const initialState = {
  transactions: JSON.parse(localStorage.getItem("transactions")) || [],
  balance: 0,
};
// let currbalance;
const expenseTrackerSlice = createSlice({
  name: "expenseTracker",
  initialState,
  reducers: {
    add(state, action) {
      const newTransactions = [...state.transactions, action.payload];

      const totalAmount = newTransactions.reduce(
        (acc, currVal) =>
          currVal.type === "Expense"
            ? acc - currVal.amount
            : acc + currVal.amount,
        0
      );

      return {
        ...state,
        transactions: newTransactions,
        balance: totalAmount,
      };
    },

    remove(state, action) {
      const deleteTransaction = state.transactions.filter(
        (value) => value.id !== action.payload
      );

      localStorage.setItem("transactions", JSON.stringify(deleteTransaction));

      const currbalance = deleteTransaction.reduce(
        (acc, currVal) =>
          currVal.type === "Expense"
            ? acc - currVal.amount
            : acc + currVal.amount,
        0
      );
      return {
        ...state,
        transactions: deleteTransaction,
        balance: currbalance,
      };
    },
  },
});

export const { add, remove } = expenseTrackerSlice.actions;
export default expenseTrackerSlice.reducer;

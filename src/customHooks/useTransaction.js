import { useContext } from "react";
import { ExpenseTrackerContext } from "../context/context";
import {
  incomeCategories,
  expenseCategories,
  resetCategories,
} from "../constants/categories";

import { useSelector } from "react-redux";

const useTransactions = (title) => {
  resetCategories();
  // const { transactions } = useContext(ExpenseTrackerContext);
  const { transactions } = useSelector((state) => state.expenseTracker);

  //  filtering of data with type === title
  const rightTransactions = transactions.filter(
    (value) => value.type === title
  );

  //   calculating total amount of filtered data
  const total = rightTransactions.reduce(
    (acc, currVal) => (acc += currVal.amount),
    0
  );

  // based on title type we distinguish categorires
  const categories = title === "Income" ? incomeCategories : expenseCategories;

  rightTransactions.forEach((value) => {
    /*[{id:1,amount: "50", category: "Salary",type: "Income"},
        {id:2,amount: "50", category: "Clothes",type: "Expenses"},
        {id:3,amount: "50", category: "Salary",type: "Income"}] */

    /*[{ type: "Business", amount: 0, color: incomeColors[0] },
            { type: "Investments", amount: 0, color: incomeColors[1] },
            { type: "Salary", amount: 0, color: incomeColors[3] }] */

    // comparing these two
    const category = categories.find((c) => c.type === value.category);

    if (category) {
      category.amount += value.amount;
    }
  });

  const filteredCategories = categories.filter((value) => value.amount > 0);

  const chartData = {
    datasets: [
      {
        data: filteredCategories.map((value) => value.amount),
        backgroundColor: filteredCategories.map((value) => value.color),
      },
    ],
    labels: filteredCategories.map((value) => value.type),
  };

  return { filteredCategories, total, chartData };
};

export default useTransactions;

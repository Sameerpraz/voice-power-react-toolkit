import React from "react";

const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div style={{ textAlign: "center", padding: "0 10%" }}>
      Try Saying: <br />
      ADD {isIncome ? "Income " : "Expense "}
      for {isIncome ? "$100 " : "$50 "}
      in Category {isIncome ? "Business or Salary " : "House "}
      for {isIncome ? "Sunday " : "Thursday "}...
    </div>
  );
};

export default InfoCard;

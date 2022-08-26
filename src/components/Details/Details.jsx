import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import "chart.js/auto";
import { Doughnut, Chart } from "react-chartjs-2";
import makeStyles from "./styles";
import useTransactions from "../../customHooks/useTransaction";
const Details = ({ title }) => {
  const classes = makeStyles();
  const { total, chartData } = useTransactions(title);
  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">${total}</Typography>
        <Doughnut data={chartData} />
        {/* <Chart type="line" data={chartData} /> */}
      </CardContent>
    </Card>
  );
};

export default Details;

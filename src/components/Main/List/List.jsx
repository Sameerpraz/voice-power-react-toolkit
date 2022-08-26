import React, { useContext } from "react";
import {
  Avatar,
  Grid,
  IconButton,
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Slide,
} from "@material-ui/core";
import { Delete, MoneyOff } from "@material-ui/icons";
import useStyles from "./styles";
import { ExpenseTrackerContext } from "../../../context/context";
import { remove } from "../../../store/expenseTrackerSlice";
import { useDispatch, useSelector } from "react-redux";
const List = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const { transactions } = useSelector((state) => state.expenseTracker);

  // destructuring of reducer
  const { deleteTransaction } = useContext(ExpenseTrackerContext);
  // const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext);

  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          key={transaction.id}
        >
          <ListItem>
            <ListItemAvatar>
              {/* for  */}
              <Avatar
                className={
                  transaction.type === "Income"
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transaction.category}
              secondary={`$${transaction.amount} - ${transaction.date}`}
            />

            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => {
                  deleteTransaction(transaction.id);
                  handleRemove(transaction.id);
                }}
              >
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};

export default List;

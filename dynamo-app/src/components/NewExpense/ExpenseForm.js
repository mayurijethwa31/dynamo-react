import "./ExpenseForm.css";
import React, { useState } from "react";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const inputTitleHandler = (value) => {
    setEnteredTitle(value);
    // setUserInput({
    //     ...userInput,
    //     enteredTitle: event.target.value
    // })

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: value };
    // });
  };

  const amountChangeHandler = (value) => {
    setEnteredAmount(value);
    // setUserInput({
    //     ...userInput,
    //     enteredAmount: event.target.value
    // // })
    // setUserInput((prevState) => {
    //     return { ...prevState, enteredAmount: value };
    //   });
  };

  const dateChangeHandler = (value) => {
    setEnteredDate(value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
    // setUserInput((prevState) => {
    //     return { ...prevState, enteredDate: value };
    //   });
  };

  const inputHandler = (identifier, value) => {
    if (identifier === "title") {
      inputTitleHandler(value);
    } else if (identifier === "amount") {
      amountChangeHandler(value);
    } else {
      dateChangeHandler(value);
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const expenseDate = {
      title: enteredTitle,
      amount: enteredAmount,
      date: enteredDate,
    };
    props.onSaveExpenseData(expenseDate);
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={(event) => {
                inputHandler("title", event.target.value);
              }}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              value={enteredAmount}
              onChange={(event) => {
                inputHandler("amount", event.target.value);
              }}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              value={enteredDate}
              onChange={(event) => {
                inputHandler("date", event.target.value);
              }}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;

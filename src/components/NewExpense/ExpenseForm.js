import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [validTitle, setValidTitle] = useState(true);
    const [validAmount, setValidAmount] = useState(true);


    const submitHandler = (event) => {

        event.preventDefault();

        if (enteredTitle.trim().length === 0) {
            setValidTitle(false);
            return;
        }

        if (enteredAmount.trim().length === 0) {
            setValidAmount(false);
            return;
        }


        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        console.log(expenseData);

        props.addExpense(expenseData);
    }

    return (
        <form onSubmit={(e) => submitHandler(e)}>
            <div className='new-expense__controls'>
                <div className={`new-expense__control ${!validTitle ? 'invalid' : ''}`}>
                    {/* <label style={{
                        color: !validTitle ? 'red' : 'black'
                    }}>Title</label> */}
                    <label>Title</label>
                    {/* <input
                        style={{
                            backgroundColor: !validTitle ? 'pink' : 'white',
                            borderColor: !validTitle ? 'red' : 'black'
                        }}
                        type='text' onChange={(event) => {
                            setEnteredTitle(event.target.value);
                        }} /> */}
                    <input type='text' onChange={(event) => {
                        setEnteredTitle(event.target.value);
                    }} />
                </div>
                <div className={`new-expense__control ${!validAmount ? 'invalid' : ''}`}>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={(event) => {
                        setEnteredAmount(event.target.value);
                    }} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-12-31' onChange={(event) => {
                        setEnteredDate(event.target.value);

                    }} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form >
    );
};

export default ExpenseForm;

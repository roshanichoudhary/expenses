import React from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter'

const Expenses = (props) => {


    const expenseChangeHandler = (value) => {

        console.log('value =', value)
        props.filterExpense(value);


    }

    return (
        <Card className="expenses">
            <ExpensesFilter selected={2020} onChangeFilter={expenseChangeHandler} />
            {props.items.map((item) => {
                return <ExpenseItem
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                />
            })}
        </Card>
    );
}

export default Expenses;

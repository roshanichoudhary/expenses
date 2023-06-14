import React, { useEffect, useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {



    const [name, setName] = useState(props.title);



    const clickMe = () => {
        setName('Updated!')
    }

    useEffect(() => {
        console.log('name changed', name);
    }, []);

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{name}</h2>
                <div className='expense-item__price'>${props.amount}</div>
                <button onClick={clickMe} >Change Title</button>
            </div>
        </Card>
    );
}

export default ExpenseItem;

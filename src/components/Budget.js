import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { expenses, budget } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const handleChange = (e) => {

        if (e.target.validity.rangeOverflow) {
            alert("Input cannot exceed available budget");
            e.target.value = budget;

        } else if(e.target.validity.rangeUnderflow) {
            alert("You cannot reduce the budget value lower than total spending");
            e.target.value = totalExpenses;           
        }
    }
    

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £ </span> <input type='number' min={totalExpenses} max={budget} step='10'onInput={handleChange}>
            </input>
        </div>
    );
};
export default Budget;
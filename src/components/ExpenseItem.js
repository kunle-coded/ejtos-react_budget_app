import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.name,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    const customStyle = [
        {
            backgroundColor: 'green',
            color: 'white',
            fontSize: '35px',
            fontWeight: 'bold',
            border: 'none',
            height: '35px',
            weight: '35px',
            borderRadius: '50%',
            textAlign: 'center',
            display: 'flex',
            margin: '15px 10px',
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            verticalAlign: 'top'
        },
        {
            backgroundColor: 'red',
            color: 'white',
            fontSize: '35px',
            fontWeight: 'bold',
            border: 'none',
            height: '33px',
            weight: '33px',
            borderRadius: '50%',
            textAlign: 'center',
            display: 'flex',
            margin: '15px 10px',
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            verticalAlign: 'top'
        }
    ]

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency} {props.cost}</td>
        <td><button onClick={event=> increaseAllocation(props.name)} style={customStyle[0]}><span style={{position: 'relative', bottom: '2px', left: '2px'}}>+</span></button></td>
        <td><button onClick={event=> decreaseAllocation(props.name)} style={customStyle[1]}><span style={{position: 'relative', bottom: '2px', left: '1px'}}>-</span> </button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
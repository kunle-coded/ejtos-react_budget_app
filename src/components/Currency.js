import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'; 
const Currency = () => {
    const { expenses, budget } = useContext(AppContext);
    
    return (
        <div className={`alert alert-success`}>
            <span>Currency </span>
            <select className="custom-select alert alert-success" id="inputGroupSelect04">
                <option defaultValue value="Pound" name="Pound">£ Pound</option>
                <option defaultValue value="Dollar" name="Dollar">$ Dollar</option>
                <option defaultValue value="Euro" name="Euro">€ Euro</option>
                <option defaultValue value="Ruppee" name="Ruppee">₹ Ruppee</option>

                
            </select>
        </div>
    );
};
export default Currency;
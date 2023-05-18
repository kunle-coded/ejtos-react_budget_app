import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { dispatch } = useContext(AppContext);

  const handleChange = (event) => {
    const selectedCurrency = event.target.value;
    dispatch({ type: 'CHG_CURRENCY', payload: selectedCurrency });
  };

  return (
    <div className="alert alert-success">
      <label htmlFor="currency">Currency: </label>
      <select className="custom-select alert alert-success" id="currency" onChange={handleChange} style={{marginLeft: '1rem'}}>
      <option value="£">
          £ Pound
        </option>
        <option value="$">
          $ Dollar
        </option>
        <option value="€">
          € Euro
        </option>
        <option value="₹">
          ₹ Rupee
        </option>
      </select>
    </div>
  );
};

export default Currency;
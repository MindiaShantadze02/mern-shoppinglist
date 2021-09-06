import React,{ useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncExp = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const income = amounts.filter(amount => amount > 0).reduce((acc,item)=>acc+=item , 0).toFixed(2);
    const expense = amounts.filter(amount => amount < 0).reduce((acc,item)=>acc+=item , 0).toFixed(2);

    return ( 
        <div className="inc-exp">
            <div className='income'>
                <h4>Income</h4>
                <p>${income}</p>
            </div>
            <div className='expense'>
                <h4>Expense</h4>
                <p>${expense}</p>
            </div>
        </div>
     );
}
 
export default IncExp;
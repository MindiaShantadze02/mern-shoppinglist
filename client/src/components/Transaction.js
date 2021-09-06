import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
const Transaction = ({ transaction }) => {
    const sign = transaction.amount < 0 ? '-' : '+';
    const amountColor = transaction.amount < 0 ? 'darkred' : 'green';
    const amountClass = transaction.amount < 0 ? 'minus' : 'plus'; 
    
    const { deleteTransaction } = useContext(GlobalContext); 

    return ( 
        <li className={`transaction ${amountClass}`}>
            <div className="transaction-tezx">
                <button className="delete" onClick={()=> {deleteTransaction(transaction._id)}}>X</button>
                <span>{transaction.text}</span>
            </div>
            <div className="amount">
                <span>{sign}</span>
                <span style={{color: amountColor}}>${Math.abs(transaction.amount)}</span>
            </div>
        </li>
     );
}
 
export default Transaction;
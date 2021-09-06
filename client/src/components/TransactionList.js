import React,{useContext,useEffect} from 'react'
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';
const TransactionList = () => {

    const { getTransactions ,transactions, loading } = useContext(GlobalContext);
    useEffect(() => {
        getTransactions();
    }, [])
    return ( 
        <>
        <h3 className='history'>History</h3>
        <hr />
        <ul className="list">
            {transactions.map(transaction => (
                <Transaction key={transaction._id} transaction={transaction} />
            ))}
        </ul>
        </>
     );
}
 
export default TransactionList;
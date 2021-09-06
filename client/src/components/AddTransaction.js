import React,{ useState , useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { nanoid } from "nanoid";
const AddTransaction = () => {

    const { addTransaction } = useContext(GlobalContext);

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const onSubmit = ev => {
        ev.preventDefault();
        const newTransaction = {
            id: nanoid(),
            text,
            amount: amount
        }

        addTransaction(newTransaction);
    }
    const handleOnChange = (ev) => {
        setText(ev.target.value);
    }
    const handleAmountChange = (ev) => {
        setAmount(ev.target.value);
    }

    return (
        <div className='add-transaction'>
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={handleOnChange} placeholder="Enter text..." />
            </div>
            <div className="form-control">
            <label htmlFor="amount"
                >Amount <br />
                (negative - expense, positive - income)</label
            >
            <input type="number" value={amount} onChange={handleAmountChange} />
            </div>
            <button className="btn" type='submit'>Add transaction</button>
        </form>
        </div>
  )
}

export default AddTransaction
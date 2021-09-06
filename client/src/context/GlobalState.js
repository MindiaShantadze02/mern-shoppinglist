import AppReducer from './AppReducer';
import { createContext , useReducer } from 'react';
import axios from 'axios';
import { config } from 'dotenv';

export const ACTIONS = {
    DELETE_TRANSACTION: "DELETE_TRANSACTION",
    ADD_TRANSACTION: "ADD_TRANSACTION",
    GET_TRANSACTIONS: "GET_TRANSACTIONS",
    TRANSACTION_ERROR: "TRANSACTION_ERROR"
}
const initialState = {
    transactions: [],
    loading: true
}


export const GlobalContext = createContext(initialState);
//Provider Component

export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const getTransactions = async () => {
        try {
            const res = await axios.get("/api/v1/transactions");
            dispatch({
                type: ACTIONS.GET_TRANSACTIONS,
                payload: res.data.data
            });
        } catch (err) {
            console.log(err);
        }
    }

    const deleteTransaction = async (id) => {
        try {
            await axios.delete(`/api/v1/transactions/${id}`)
            dispatch({
                type: ACTIONS.DELETE_TRANSACTION,
                payload: id
            });    
        } catch (err) {
            console.log(err);
        }
        
    }
    const addTransaction = async (transaction) => {
        const config = {
            headers: {
                "Content-Type":"application/json"
            }
        }
        try {
            const res = await axios.post("/api/v1/transactions/",transaction, config);
            console.log(res);
            dispatch({
                type: ACTIONS.ADD_TRANSACTION,
                payload: res.data.data
            });    
        } catch (err) {
           console.log(err); 
        }
        
    }
    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction,
            getTransactions,
            loading: state.loading
        }}>
            {props.children}
        </GlobalContext.Provider>
    );
}
import { ACTIONS } from './GlobalState';
const AppReducer = (state,action) => {
    switch (action.type) {
        case ACTIONS.GET_TRANSACTIONS:
            return {
                ...state,
                loading: false,
                transactions: action.payload
            }
        case ACTIONS.DELETE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
            }
        case ACTIONS.ADD_TRANSACTION:
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }
        default:
            return state;
    }
}

export default AppReducer;
import {
    ADD_ITEM    ,
    DELETE_ITEM ,
    GET_ITEMS
} from "./types";

const ItemsReducer = (state, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [...state, action.payload];
        case GET_ITEMS:
            return action.payload
        case DELETE_ITEM:
            return state.filter(item => action.payload !== item._id);
    }
}
export default ItemsReducer;
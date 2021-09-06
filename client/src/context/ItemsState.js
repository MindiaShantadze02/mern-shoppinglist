import { createContext , useReducer } from "react";
import ItemsReducer from "./ItemsReducer";
import axios from "axios";
import {
    ADD_ITEM,
    DELETE_ITEM,
    GET_ITEMS
} from "./types";
export const ItemsContext = createContext();

const initialState = [];

export const ItemsState = (props) => {
    const [state, dispatch] = useReducer(ItemsReducer, initialState);

    const getItems = async () => {
        const res = await axios.get("/api");
        dispatch({
            type: GET_ITEMS,
            payload: res.data.data
        })
    }
    const setItems = async (itemObj) => {
        const res = await axios.post("/api",itemObj);
        dispatch({
            type: ADD_ITEM,
            payload: res.data.data
        });
    }
    const deleteItem = async (id) => {
        await axios.delete(`/api/${id}`);
        dispatch({
            type: DELETE_ITEM,
            payload: id
        })
    }
    return <ItemsContext.Provider value={{
        items: state,
        setItems,
        deleteItem,
        getItems
    }}>
        {props.children}
    </ItemsContext.Provider>
}
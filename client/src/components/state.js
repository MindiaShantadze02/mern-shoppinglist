import { createContext , useReducer } from "react";

const appContext = createContext();

const initialState = {
    tasks: [],
    totalTasks: tasks.length
}

const tasksState = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <appContext.Provider value={...state}>
            {children}
        </appContext.Provider>
    )
}
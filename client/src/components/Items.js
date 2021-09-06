import { useContext , useEffect } from "react";
import { ItemsContext } from "../context/ItemsState";
import Task from "./Item";
const Tasks = () => {
    const { getItems , items } = useContext(ItemsContext);
    useEffect(() => {
        getItems();
    }, []);
    return ( 
        <ul className="items">
            {
                items.map(item => (
                    <Task key={item._id} item={item} />
                ))
            }
        </ul>
     );
}
 
export default Tasks;
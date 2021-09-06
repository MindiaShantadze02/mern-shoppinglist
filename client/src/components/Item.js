import { useContext } from "react";
import { ItemsContext } from "../context/ItemsState";
const Task = ({item}) => {
    const { deleteItem } = useContext(ItemsContext);
    return ( 
        <li className="item">
            <button className="delete" onClick={()=> deleteItem(item._id)}>Delete</button>
            <b className="item-text">{item.text}</b>
        </li>
     );
}
 
export default Task;
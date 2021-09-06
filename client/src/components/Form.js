import { useState , useContext } from "react";
import { ItemsContext } from "../context/ItemsState";
import { nanoid } from "nanoid";
const Form = () => {
    const {items, setItems} = useContext(ItemsContext);
    const [newText, setNewText] = useState("");
    const [alert, setAlert] = useState(false);
    const handleTextChange = (ev) => {
        setNewText(ev.target.value);
    }
    const addItem = (ev) => {
        const emptySpace = /^\s+$/;
        ev.preventDefault();
        if (newText === "" || newText.match(emptySpace)) {
            setAlert(true);
            setTimeout(()=> {
                setAlert(false);
            }, 2000);
        } else {
            const itemObj = {
                text: newText
            }
            setItems(itemObj);
            setNewText("");
        }
    }
    return ( 
        <div className="form-wrapper">
            <h2>Add to the shopping list</h2>
            <form className="form" onSubmit={addItem}>
                <h3>Item</h3>
                <input type="text" placeholder="Enter item..."
                 value={newText} onChange={handleTextChange} />
                 {alert && (
                     <p style={{color:"red",fontWeight:"bold"}}>Please enter a value...</p>
                 )}
                <button type="submit">Add item</button>
            </form>
        </div>
     );
}
 
export default Form;
import './app.css';
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Items from "./components/Items";
import { ItemsState } from "./context/ItemsState";
function App() {
  return (
    <ItemsState>
      <div className="app">
        <Navbar />
        <Form />
        <Items />
      </div>
    </ItemsState>
  );
}

export default App;

import { useState } from "react";
import { toast } from "react-toastify";
import ListItem from "./ListItem";

function GroceryCart() {

  const [groceryInput, setGroceryInput] = useState("");
  const [groceryList, setGroceryList] = useState([]);

  const handleInputChange = (e) => {
    setGroceryInput(e.target.value);
  };

  const insertGroceryItem = () => {
    if (groceryInput.trim() === "") {
      toast.error("Please insert grocery item", {
        position: "top-center",
      });
      return;
    }

    // inserting array
    setGroceryList([...groceryList, { item: groceryInput }]);
  };

  return (
    <div>
      <h3>Grocery Bud</h3>
      {/* Input and Add button */}
      <section>
        <input type="text" value={groceryInput} onChange={handleInputChange} />
        <button onClick={insertGroceryItem}>Add</button>
      </section>

      {/* Display our list */}
      <section>
        <ul>
          {groceryList.map((el, index) => (
            <ListItem key={index} label={el.item} />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default GroceryCart;

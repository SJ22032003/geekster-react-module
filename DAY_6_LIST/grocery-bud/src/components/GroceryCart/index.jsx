import { useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
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
    setGroceryList([
      ...groceryList,
      { item: groceryInput, id: uuidv4(), isChecked: false },
    ]);

    // clear input
    setGroceryInput("");

    // toast notification
    toast.success("You added a grocery!!!");
  };

  const deleteListItem = (id) => {
    const newFilteredArr = groceryList.filter((item) => item.id !== id);
    setGroceryList(newFilteredArr);
    toast.success("Deleted list item");
  };

  const checkOurItem = (id) => {
    const newFilteredArr = groceryList.map((item) => {
      if (item.id === id) {
        item.isChecked = !item.isChecked;
      }
      return item;
    });

    setGroceryList(newFilteredArr);
    toast.success("Item checked");
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
          {groceryList.map((el) => (
            <ListItem
              key={el.id}
              label={el.item}
              id={el.id}
              isChecked={el.isChecked}
              delFunc={deleteListItem}
              checkedFunc={checkOurItem}
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default GroceryCart;

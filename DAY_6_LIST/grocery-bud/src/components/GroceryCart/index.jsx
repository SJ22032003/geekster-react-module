import { useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import ListItem from "./ListItem";

function GroceryCart() {
  const [groceryInput, setGroceryInput] = useState("");
  const [groceryList, setGroceryList] = useState(
    JSON.parse(localStorage.getItem("grocery-list")) || []
  ); // null || []
  const handleInputChange = (e) => {
    setGroceryInput(e.target.value);
  };

  const updateLocalStorage = (updatedArr) =>
    localStorage.setItem("grocery-list", JSON.stringify(updatedArr));

  const insertGroceryItem = () => {
    if (groceryInput.trim() === "") {
      toast.error("Please insert grocery item", {
        position: "top-center",
      });
      return;
    }

    // newArr
    const newArr = [
      ...groceryList,
      { item: groceryInput, id: uuidv4(), isChecked: false },
    ];

    // inserting array
    setGroceryList(newArr);

    // clear input
    setGroceryInput("");

    // toast notification
    toast.success("You added a grocery!!!");

    // localstorage
    updateLocalStorage(newArr);
  };

  const deleteListItem = (id) => {
    const newFilteredArr = groceryList.filter((item) => item.id !== id);
    setGroceryList(newFilteredArr);
    toast.success("Deleted list item");
    // localstorage
    console.log(newFilteredArr)
    updateLocalStorage(newFilteredArr);
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
    updateLocalStorage(newFilteredArr);
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

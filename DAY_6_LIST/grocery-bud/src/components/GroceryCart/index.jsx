import { useState } from "react";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import ListItem from "./ListItem";
import UpdateItem from "./UpdateItem";

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
      { item: groceryInput, id: uuidv4(), isChecked: false, isEditing: false },
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
    console.log(newFilteredArr);
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

  const allowGroceryItemToUpdate = (id) => {
    const editAllowedList = groceryList.map(item => {
      if(item.id === id) {
        item.isEditing = true;
      }
      return item;
    })
    setGroceryList(editAllowedList);
  }

  const updateGroceryItem = (val, id) => {
    const updatedGroceryList = groceryList.map((todo) => {
      if (todo.id === id) {
        todo.item = val;
        todo.isEditing = false;
      }
      return todo;
    });
    setGroceryList(updatedGroceryList);
    toast.success("Todo updated");
    updateLocalStorage(updatedGroceryList);
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
          {groceryList.map((el) => {
            return el.isEditing ? (
              <UpdateItem
                id={el.id}
                updateVal={el.item}
                updateGroceryItem={updateGroceryItem}
              />
            ) : (
              <ListItem
                key={el.id}
                label={el.item}
                id={el.id}
                isChecked={el.isChecked}
                delFunc={deleteListItem}
                checkedFunc={checkOurItem}
                updateFunc={allowGroceryItemToUpdate}
              />
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default GroceryCart;

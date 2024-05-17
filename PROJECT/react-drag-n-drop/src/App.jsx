import "./App.css";
import InProgress from "./components/InProgress";
import Todo from "./components/Todo";
import Done from "./components/Done";
import { useState } from "react";
import { data } from "./data";

function App() {
  const [tasksData, setTasksData] = useState(data);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleDrop = (status, position) => {

    // 1. FILTER OUT THE USER SELECTED CARD AND STORE THE REMAINING ARRAY
    const remainingTasksFromData = tasksData.filter(
      (item) => item.id !== selectedCard.id
    );

    // 2. UPDATED THE STATUS OF THE USER SELECTED CARD. E.G. -> SELECTED CARD FROM todo --> in-progress
    const userSelectedCard = {
      ...selectedCard,
      status, // THE UPDATED STATUS
    };

    // 3. INITIALIZE THREE VARIABLES
    /**
     * newUpdatedTasksList  -- WILL STORE THE NEW UPDATED TASK LIST WITH CORRECT POSITION
     * currentPosition      -- THE POSITION WITH RESPECT TO STATUS, SO E.G -> [todo, todo, in-progress, todo, in-progress]
     *                         I WANT TO STORE MY NEW TASK IN 1 INDEX OF ALL in-progress TASKS AFTER WE SHOW THEM IN UI USING
     *                         ARRAY.FILTER
     * flag                 -- TO BLOCK RE-ENTERING TO CHECK BLOCK
     * 
    */
    let newUpdatedTasksList = [], currentPosition = 0, flag = true;

    // LOOP THROUGH THE remainingTasksFromData
    remainingTasksFromData.forEach((task) => {
      // CHECK IF THE TASK STATUS MATCHES THE CURRENT DRAGGED STATUS LOCATION | AND BLOCK IF ITS ALREADY CHECKED AND UPDATED
      if (task.status === status && flag) {
        // CHECK IF THE POSITION IS CORRECT OR NOT
        if (currentPosition === position) {
          // PUSH IF THE POSITION IS CORRECT
          newUpdatedTasksList.push(userSelectedCard);
          // TURN FLAG FALSE TO BLOCK GOING INTO THIS AGAIN
          flag = false;
        } else {
          // OTHERWISE OUR CURRENT POSITION WAS NOT MATCHING TO PLACE ANOTHER TASK
          currentPosition++;
        }
      }
      // PUSH OTHER REMAINING TASKS ACCORDINGLY 
      newUpdatedTasksList.push(task);
    });

    // IF THE FLAG IS STILL TRUE, THAT MEANS OUR SELECTED status LIST IS EMPTY AND WE NEVER ENCOUNTER task.status === status
    // JUST PUSH IT TO THE END
    if (flag === true) newUpdatedTasksList.push(userSelectedCard);

    // UPDATED OUR STATE
    setTasksData(newUpdatedTasksList);
  };

  return (
    <>
    <center><h1>TEST:  CREATE DRAG n DROP </h1></center>
    <h4>30 Minutes duration</h4>
    <main style={{ display: "flex", justifyContent: "space-evenly" }}>
      <Todo
        data={tasksData}
        setSelectedCard={setSelectedCard}
        onDrop={handleDrop}
      />
      <InProgress
        data={tasksData}
        setSelectedCard={setSelectedCard}
        onDrop={handleDrop}
      />
      <Done
        data={tasksData}
        setSelectedCard={setSelectedCard}
        onDrop={handleDrop}
      />
    </main>
    </>
  );
}

export default App;

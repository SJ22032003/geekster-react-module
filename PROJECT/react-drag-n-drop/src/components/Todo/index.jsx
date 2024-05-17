import Column from "../common/Column";
import Card from "../common/Card";
import DropArea from "../common/DropArea";

function Todo({ setSelectedCard, data, onDrop }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Doing</h1>
      <Column>
        <DropArea onDrop={() => onDrop("todo", 0)} />
        {data
          .filter((item) => item.status === "todo")
          .map((item, index) => {
            return (
              <>
                <Card cardInfo={item} setSelectedCard={setSelectedCard} />
                <DropArea onDrop={() => onDrop(item.status, index + 1)} />
              </>
            );
          })}
      </Column>
    </div>
  );
}

export default Todo;

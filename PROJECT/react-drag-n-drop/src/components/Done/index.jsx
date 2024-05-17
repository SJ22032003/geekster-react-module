import Column from "../common/Column";
import Card from "../common/Card";
import DropArea from "../common/DropArea";

function Done({ setSelectedCard, data, onDrop }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Done</h1>
      <Column>
        <DropArea onDrop={() => onDrop("done", 0)} />
        {data
          .filter((item) => item.status === "done")
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

export default Done;
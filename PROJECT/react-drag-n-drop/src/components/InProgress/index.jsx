import Column from "../common/Column";
import Card from "../common/Card";
import DropArea from "../common/DropArea";

function InProgress({ setSelectedCard, data, onDrop }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>In Progress</h1>
      <Column>
        <DropArea onDrop={() => onDrop("in-progress", 0)} />
        {data
          .filter((item) => item.status === "in-progress")
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

export default InProgress;

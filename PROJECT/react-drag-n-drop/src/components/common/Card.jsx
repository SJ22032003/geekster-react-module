import styles from "./styles.module.css";

function Card({ cardInfo, setSelectedCard }) {
  return (
    <div
      className={styles.dragItems}
      onDragStart={() => setSelectedCard(cardInfo)}
      onDragEnd={() => setSelectedCard(null)}
      draggable
    >
      <p>{cardInfo.title}</p>
    </div>
  );
}

export default Card;

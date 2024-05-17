import { useState } from "react";
import styles from "./styles.module.css";

function DropArea({ onDrop }) {
  const [showDrop, setShowDrop] = useState(false);
  return (
    <div
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      onDragOver={(e) => e.preventDefault()}
      className={showDrop ? styles.visibleArea : styles.noDropArea}
      onDrop={() => {
        onDrop();
        setShowDrop(false);
      }}
    >
      DropArea
    </div>
  );
}

export default DropArea;

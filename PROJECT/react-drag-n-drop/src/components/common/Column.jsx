import styles from "./styles.module.css";

function Column({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default Column;

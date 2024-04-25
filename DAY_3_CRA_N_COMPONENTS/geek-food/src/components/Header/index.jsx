import "./styles.css";
import styles from "./css_style.module.css";
import reactImg from "../../assets/react.svg";

function Header() {
  const navItem = ["Home", "Quote", "Restaurant", "Food"];

  const inlineStyle = {
    backgroundColor: "#111827",
    color: "#fff",
    padding: "20px 40px",
  };

  return (
    <div style={inlineStyle}>
      <nav className="navbarItem">
        <section className={styles.sectionContainer}>
          <img src={reactImg} alt="logo" />
          <h2>GeekFood</h2>
        </section>
        <section>
          <ul className={`${styles["horizontal-list"]} ${styles.removeListStyle}`}>
            {navItem.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
        <section className={styles.sectionContainer}>
          <button>Get Started</button>
        </section>
      </nav>
    </div>
  );
}

export default Header;

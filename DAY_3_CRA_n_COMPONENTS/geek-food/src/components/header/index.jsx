import styles from "./classModule.module.css";

const logoUrl = `https://flowbite.com/docs/images/logo.svg`;

function Header() {
  const navItems = ["Home", "Quote", "Restaurants", "Foods", "Contact"];

  return (
    <div
      id="main-header"
      style={{
        backgroundColor: "#111827",
        color: "#fff",
        padding: "20px 40px",
      }}
    >
      <nav className={styles.navbar}>
        <section className={styles.sectionContainer}>
          <img src={logoUrl} alt="geek-food-logo" />
          <span style={{ fontSize: "1.5rem", fontWeight: "600" }}>
            GeekFoods
          </span>
        </section>
        <section className={styles.sectionContainer}>
          <ul className={styles.navListStyles}>
            {navItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
        <section>
          <button className={styles.getStartedBtn}>Get Started</button>
        </section>
      </nav>
    </div>
  );
}

export default Header;

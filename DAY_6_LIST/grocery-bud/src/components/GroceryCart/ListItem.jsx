function ListItem({ label = "" }) {
  return (
    <>
      <li
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <input type="checkbox" />
        {label}
        <button>Delete</button>
      </li>
    </>
  );
}

export default ListItem;

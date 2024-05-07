function ListItem({ label = "", id, delFunc, isChecked, checkedFunc, updateFunc }) {

  return (
    <>
      <li
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <input
          type="checkbox"
          onChange={() => checkedFunc(id)}
          defaultChecked={isChecked}
        />
        <p style={{ textDecoration: isChecked ? "line-through" : "" }}>
          {label}
        </p>
        <button onClick={() => delFunc(id)}>Delete</button>
        <button onClick={() => updateFunc(id)}>Update</button>
      </li>
    </>
  );
}

export default ListItem;

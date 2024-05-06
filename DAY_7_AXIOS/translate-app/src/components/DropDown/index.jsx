function DropDown({ supportedLanguages, label, onChange }) {
  return (
    <>
      <p>{label}</p>
      <select onChange={onChange}>
        {Object.entries(supportedLanguages).map(([language, value]) => {
          return (
            <option key={value} value={value}>
              {language}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default DropDown;

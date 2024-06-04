import { useState } from "react";

const tabs = [
  {
    id: 1,
    name: "Tab 1",
  },
  {
    id: 2,
    name: "Tab 2",
  },
  {
    id: 3,
    name: "tab 3",
  },
];

const desp = {
  1: "hell0 this is tab",
  2: "this this tab 2",
  3: "this is tab 3",
};

function Tab() {
  
  const [myTab, setMyTab] = useState(1);

  return (
    <div>
      <div style={{ display: "flex", gap: "2rem" }}>
        {tabs.map((tab, i) => (
          <h3 key={i} style={{cursor: "pointer"}} onClick={() => setMyTab(tab.id)}>
            {tab.name}
          </h3>
        ))}
      </div>

      <div>{desp[myTab]}</div>
    </div>
  );
}

export default Tab;

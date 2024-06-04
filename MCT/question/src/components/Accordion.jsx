import { useState } from "react";

const data = [
  {
    id: 1,
    title: "hello this is title 1",
    desp: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio architecto at quos, consequatur similique perferendis iusto sunt quam debitis deleniti!",
    isOpen: false,
  },
  {
    id: 2,
    title: "hello this is title 2",
    desp: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio architecto at quos, consequatur similique perferendis iusto sunt quam debitis deleniti!",
    isOpen: false,
  },
  {
    id: 3,
    title: "hello this is title 3",
    desp: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio architecto at quos, consequatur similique perferendis iusto sunt quam debitis deleniti!",
    isOpen: false,
  },
];

function Accordion() {
  const [accData, setAccData] = useState(data);

  const handleAcc = (id) => {
    const mappedList = accData.map(el =>{
      if(el.id === id) {
        el.isOpen = !el.isOpen
      }
      return el
    })
    setAccData(mappedList);
  }

  return (
    <div>
      {accData.map((el) => {
        return (
          <>
            <div>
              {el.title}
              <button
                onClick={() => handleAcc(el.id)}
              >{el.isOpen ? "close" : "open"}</button>
            </div>
            {el.isOpen && <h2>{el.desp}</h2>}
          </>
        );
      })}
    </div>
  );
}

export default Accordion;

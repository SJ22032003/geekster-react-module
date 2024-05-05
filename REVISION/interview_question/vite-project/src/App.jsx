import { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [dataList, setDataList] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [userList, setUserList] = useState([]);

  // fetch data from api;
  const getUserData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then(async (res) => {
        const userDataList = await res.json();
        setDataList(userDataList);
        setUserList(userDataList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // filter the userList
  const filteringUserList = () => {
    const filteredUserList = dataList.filter((user) => {
      return user.name.toLowerCase().startsWith(userInput.toLowerCase());
    });
    setUserList(filteredUserList);
  };

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    filteringUserList();
  }, [userInput]);

  return (
    <>
      <main>
        {/* input for searching names */}
        <section>
          <input
            type="text"
            placeholder="search for users"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
        </section>
        {/* mapping my users */}
        <section>
          {userList.map((user) => {
            return <p key={user.id}>{user.name}</p>;
          })}
        </section>
      </main>
    </>
  );
}

export default App;

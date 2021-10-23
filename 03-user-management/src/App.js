import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import { useState } from "react";

const INITIAL_USERS = [
  {
    id: "u1",
    name: "Jeff",
    age: 37,
  },
  {
    id: "u2",
    name: "Max",
    age: 31,
  },
];

function App() {
  const [usersList, setUsersList] = useState(INITIAL_USERS);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;

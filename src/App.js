import UserFinder from "./components/UserFinder";
import UsersContext from "./store/users-context";
// import Users from "./components/Users";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

function App() {
  const defaultCtxVal = {
    users: DUMMY_USERS,
  };

  return (
    <UsersContext.Provider value={defaultCtxVal}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;

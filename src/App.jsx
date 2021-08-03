import React, { useState } from "react";
import { Context } from "./context";
import "./styles.css";
import List from "./components/List";
import Modal from "./components/Modal";
import { usersDB } from "./database/users";
// import Test from "./components/Test";
export default function App() {
  let users = usersDB;
  const [db, setDb] = useState(users);

  function vis() {
    let element = document.getElementById("modal");
    element.style.transform = "scale(1)";
  }

  // console.log(users);
  function edRec(id) {
    console.log(id);
    vis(id);
  }

  function delRec(id) {
    users = db;
    users.splice(id, 1);
    setDb([...db]);
  }
  return (
    <Context.Provider
      value={{
        edRec,
        delRec
      }}
    >
      {/* <Test /> */}
      <List db={db} />
      <Modal />
    </Context.Provider>
  );
}

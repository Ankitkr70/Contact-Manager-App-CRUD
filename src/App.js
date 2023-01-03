import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import AllContacts from "./components/AllContact/AllContacts";
import EditContact from "./components/EditContact/EditContact";
import ViewContact from "./components/ViewContact/ViewContact";
import CreateContacts from "./components/CreateContact/CreateContacts";

function App() {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <div className="max-w-7xl m-auto">
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/contacts/allContact" />}
          ></Route>

          <Route
            path="/contacts/allContact"
            element={<AllContacts></AllContacts>}
          ></Route>

          <Route
            path="/contacts/editContact"
            element={<EditContact></EditContact>}
          ></Route>

          <Route
            path="/contacts/viewContact/:id"
            element={<ViewContact></ViewContact>}
          ></Route>

          <Route
            path="/contacts/addContact"
            element={<CreateContacts></CreateContacts>}
          ></Route>
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;

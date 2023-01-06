import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ViewContact() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [constact, setContact] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:3001/contacts/${id}`)
      .then((response) => setContact(response.data));
  }, []);
  return (
    <div className="shadow-lg p-4 flex my-10 mx-20 gap-10 border-solid border-2 rounded-md items-center bg-green-300 ">
      <img
        src={constact.photoURL}
        alt="Default avatar"
        style={{ width: "200px", height: "200px" }}
        className="rounded-full"
      />
      <div>
        <p className="font-bold mb-4">
          Name: <span>{constact.name}</span>
        </p>
        <p className="font-bold mb-4">
          Mobile: <span>{constact.mobile}</span>
        </p>
        <p className="font-bold mb-4">
          Email: <span>{constact.email}</span>
        </p>
        <p className="font-bold mb-4">
          Company: <span>{constact.company}</span>
        </p>
        <p className="font-bold mb-4">
          Group: <span>{constact.group}</span>
        </p>
      </div>
      <button
        onClick={() => navigate("/contacts/allContact")}
        className="self-end ml-auto h-8 px-4 text-md text-white bg-purple-700 hover:bg-purple-800 rounded-md flex items-center"
      >
        Back
      </button>
    </div>
  );
}

export default ViewContact;

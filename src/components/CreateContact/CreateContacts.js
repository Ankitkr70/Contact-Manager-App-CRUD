import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";

const defaultAvatar =
  "https://library.kissclipart.com/20180918/rse/kissclipart-avatar-blue-icon-clipart-computer-icons-avatar-cli-a6b01992f1cd42fe.png";

function CreateContacts() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    id: "",
    name: "",
    photoURL: "",
    mobile: "",
    email: "",
    company: "",
    group: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/contacts", {
        ...state,
        id: uuid(),
      })
      .then((response) => {
        if (response.status === 201) {
          navigate("/contacts/allContact", { replace: true });
        }
      });
  };
  return (
    <div className="mx-4">
      <h1 className="text-5xl font-bold text-center my-10">Create Contact</h1>
      <div className="flex justify-center mb-8">
        <img
          className="w-32 h-32"
          src={state.photoURL ? state.photoURL : defaultAvatar}
          alt="contact dp"
        />
      </div>
      <div className=" ">
        <form onSubmit={handleSubmit} action="" className="w-1/2 mx-auto">
          <input
            required={true}
            name="name"
            onChange={handleChange}
            type="text"
            placeholder="Name"
            className="w-full border text-lg mb-8"
          />
          <input
            required={true}
            name="photoURL"
            onChange={handleChange}
            type="text"
            placeholder="Photo URL"
            className="w-full border text-lg mb-8"
          />
          <input
            required={true}
            name="mobile"
            onChange={handleChange}
            type="text"
            placeholder="Mobile"
            className="w-full border text-lg mb-8"
          />
          <input
            required={true}
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="Email"
            className="w-full border text-lg mb-8"
          />
          <input
            required={true}
            name="company"
            onChange={handleChange}
            type="text"
            placeholder="Company"
            className="w-full border text-lg mb-8"
          />
          <select
            onChange={handleChange}
            name="group"
            id=""
            className="w-full border text-lg mb-8"
          >
            <option value="" hidden>
              Select your option
            </option>
            <option value="Family">Family</option>

            <option value="Friends">Friends</option>
            <option value="Colleague">Colleague</option>
          </select>
          <div className="flex justify-between text-lg text-white font-bold">
            <input
              type="submit"
              value="Submit"
              className="bg-purple-600 cursor-pointer hover:bg-purple-700 p-3 rounded-md w-1/3"
            />
            <input
              type="reset"
              value="Reset"
              className="bg-purple-600 cursor-pointer hover:bg-purple-700 p-3 rounded-md w-1/3"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateContacts;

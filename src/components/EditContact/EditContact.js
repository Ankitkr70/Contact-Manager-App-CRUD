import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const defaultAvatar =
  "https://library.kissclipart.com/20180918/rse/kissclipart-avatar-blue-icon-clipart-computer-icons-avatar-cli-a6b01992f1cd42fe.png";

function EditContact() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
    photoURL: "",
    mobile: "",
    email: "",
    company: "",
    group: "",
  });
  // const [contact, setContact] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:3001/contacts/${id}`).then((response) =>
      setState({
        name: response.data.name,
        photoURL: response.data.photoURL,
        mobile: response.data.mobile,
        email: response.data.email,
        company: response.data.company,
        group: response.data.group,
      })
    );
  }, []);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleReset = (e) => {
    e.preventDefault();
    setState({
      name: "",
      photoURL: "",
      mobile: "",
      email: "",
      company: "",
      group: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/contacts/${id}`, state)
      .then((response) => {
        if (response.status === 200) {
          navigate("/contacts/allContact", { replace: true });
        }
      });
  };
  return (
    <div className="mx-4">
      <h1 className="text-5xl font-bold text-center my-10">Edit Contact</h1>
      <div className="flex justify-center mb-8">
        <img
          className="w-32 h-32"
          src={state.photoURL ? state.photoURL : defaultAvatar}
          alt="contact dp"
        />
      </div>
      <div className=" ">
        <form
          action=""
          className="w-1/2 mx-auto"
          onReset={handleReset}
          onSubmit={handleSubmit}
        >
          <input
            name="name"
            required
            value={state.name}
            onChange={handleChange}
            type="text"
            placeholder="Name"
            className="w-full border text-lg mb-8"
          />
          <input
            name="photoURL"
            onChange={handleChange}
            required
            value={state.photoURL}
            type="text"
            placeholder="Photo URL"
            className="w-full border text-lg mb-8"
          />
          <input
            name="mobile"
            onChange={handleChange}
            required
            value={state.mobile}
            type="text"
            placeholder="Mobile"
            className="w-full border text-lg mb-8"
          />
          <input
            name="email"
            onChange={handleChange}
            required
            value={state.email}
            type="email"
            placeholder="Email"
            className="w-full border text-lg mb-8"
          />
          <input
            name="company"
            onChange={handleChange}
            required
            value={state.company}
            type="text"
            placeholder="Company"
            className="w-full border text-lg mb-8"
          />
          <select
            name="group"
            onChange={handleChange}
            id=""
            className="w-full border text-lg mb-8"
            value={state.group}
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
              value="Update"
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

export default EditContact;

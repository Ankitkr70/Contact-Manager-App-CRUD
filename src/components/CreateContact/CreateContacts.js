import React from "react";
const defaultAvatar =
  "https://library.kissclipart.com/20180918/rse/kissclipart-avatar-blue-icon-clipart-computer-icons-avatar-cli-a6b01992f1cd42fe.png";

function CreateContacts() {
  return (
    <div className="mx-4">
      <h1 className="text-5xl font-bold text-center my-10">Create Contact</h1>
      <div className="flex justify-center mb-8">
        <img className="w-32 h-32" src={defaultAvatar} alt="contact dp" />
      </div>
      <div className=" ">
        <form action="" className="w-1/2 mx-auto">
          <input
            type="text"
            placeholder="Name"
            className="w-full border text-lg mb-8"
          />
          <input
            type="text"
            placeholder="Photo URL"
            className="w-full border text-lg mb-8"
          />
          <input
            type="text"
            placeholder="Mobile"
            className="w-full border text-lg mb-8"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border text-lg mb-8"
          />
          <input
            type="text"
            placeholder="Company"
            className="w-full border text-lg mb-8"
          />
          <select name="group" id="" className="w-full border text-lg mb-8">
            <option value="" disabled selected>
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

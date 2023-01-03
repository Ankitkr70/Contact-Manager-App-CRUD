import React from "react";
import { FaSearch, FaEye, FaEdit, FaTrash } from "react-icons/fa";

function AllContacts() {
  return (
    <div className="mx-4">
      <p className="text-5xl font-bold text-center my-10">All Constacts</p>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Seach..."
          className="border-solid border-2 focus:outline-none w-1/3
          h-8"
        />
        <button className="ml-4 h-8 px-4 text-md text-white bg-purple-700 hover:bg-purple-800 rounded-md flex items-center">
          <FaSearch></FaSearch>
        </button>
      </div>
      <div className="flex mt-10 justify-between gap-10 font-bold flex-wrap">
        <div className="flex items-center w-2/5 gap-4">
          <div>
            <img
              className="w-32 h-32"
              src="https://library.kissclipart.com/20180918/rse/kissclipart-avatar-blue-icon-clipart-computer-icons-avatar-cli-a6b01992f1cd42fe.png"
              alt="contact dp"
            />
          </div>
          <div className="grow">
            <div className="flex items-center  justify-between  mb-1 ">
              <span>Name: Ankit Kumar</span>
              <button className="bg-amber-500  hover:bg-amber-600 p-2.5 rounded-sm">
                <FaEye></FaEye>
              </button>
            </div>
            <div className="flex items-center  justify-between mb-1">
              <span>Mobile: 012456789</span>
              <button className="bg-blue-500 hover:bg-blue-600 p-2.5 rounded-sm">
                <FaEdit></FaEdit>
              </button>
            </div>
            <div className="flex items-center justify-between mb-1  ">
              <span>Email: ankit@gmail.com</span>
              <button className="bg-red-500 hover:bg-red-600 p-2.5 rounded-sm">
                <FaTrash></FaTrash>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllContacts;

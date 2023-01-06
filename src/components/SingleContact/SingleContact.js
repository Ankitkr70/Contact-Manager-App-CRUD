import React from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

export default function SingleContact({ data }) {
  return (
    <div className="flex items-center w-2/5 gap-4">
      <div>
        <img
          className="w-32 h-32 rounded-full"
          src={data.photoURL}
          alt="contact dp"
        />
      </div>
      <div className="grow">
        <div className="flex items-center  justify-between  mb-1 ">
          <span>Name: {data.name}</span>
          <button className="bg-amber-500  hover:bg-amber-600 p-2.5 rounded-sm">
            <FaEye></FaEye>
          </button>
        </div>
        <div className="flex items-center  justify-between mb-1">
          <span>Mobile: {data.mobile}</span>
          <button className="bg-blue-500 hover:bg-blue-600 p-2.5 rounded-sm">
            <FaEdit></FaEdit>
          </button>
        </div>
        <div className="flex items-center justify-between mb-1  ">
          <span>Email: {data.email}</span>
          <button className="bg-red-500 hover:bg-red-600 p-2.5 rounded-sm">
            <FaTrash></FaTrash>
          </button>
        </div>
      </div>
    </div>
  );
}
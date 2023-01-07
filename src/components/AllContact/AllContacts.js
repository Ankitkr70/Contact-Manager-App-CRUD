import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import SingleContact from "../SingleContact/SingleContact";

function AllContacts() {
  const [contacts, setContacts] = useState([]);
  const [searched, setSearched] = useState([]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    axios.get("http://localhost:3001/contacts").then((response) => {
      setContacts(response.data);
    });
  }, []);

  useEffect(() => {
    if (query) {
      const filterContacts = contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(query.toLowerCase());
      });
      setSearched(filterContacts);
    } else {
      setContacts(contacts);
    }
  }, [query, searched, contacts]);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/contacts/${id}`).then((response) => {
      if (response.status === 200) {
        console.log("deleted");

        axios.get("http://localhost:3001/contacts").then((response) => {
          setContacts(response.data);
        });
      }
    });
  };
  return (
    <div className="mx-4">
      <p className="text-5xl font-bold text-center my-10">All Contacts</p>
      <div className="flex justify-center">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
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
        {query
          ? searched.map((contact) => {
              return (
                <SingleContact
                  data={contact}
                  handleDelete={handleDelete}
                ></SingleContact>
              );
            })
          : contacts.map((contact) => {
              return (
                <SingleContact
                  data={contact}
                  handleDelete={handleDelete}
                ></SingleContact>
              );
            })}
      </div>
    </div>
  );
}

export default AllContacts;

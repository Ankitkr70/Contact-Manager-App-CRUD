import React from "react";
const defaultAvatar =
  "https://library.kissclipart.com/20180918/rse/kissclipart-avatar-blue-icon-clipart-computer-icons-avatar-cli-a6b01992f1cd42fe.png";

function ViewContact() {
  return (
    <div className="shadow-lg p-4 flex my-10 mx-20 gap-10 border-solid border-2 rounded-md items-center">
      <img
        src={defaultAvatar}
        alt="Default avatar"
        width="200px"
        height="200px"
      />
      <div>
        <p className="font-bold mb-4">
          Name: <span>Ankit Kumar</span>
        </p>
        <p className="font-bold mb-4">
          Mobile: <span>0123456</span>
        </p>
        <p className="font-bold mb-4">
          Email: <span>ankitkr70@gmail.com</span>
        </p>
        <p className="font-bold mb-4">
          Company: <span>Infy</span>
        </p>
        <p className="font-bold mb-4">
          Group: <span>Friend</span>
        </p>
      </div>
      <button className="self-end ml-auto h-8 px-4 text-md text-white bg-purple-700 hover:bg-purple-800 rounded-md flex items-center">
        Back
      </button>
    </div>
  );
}

export default ViewContact;

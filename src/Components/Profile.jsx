import React from "react";
import { useState } from "react";
import axios from "axios";

function Profile() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");

  const accessDB = () => {
    axios
      .get("/api/profile")
      .then((res) => {
        console.log(res.data);
        setfirstName(res.data.firstName);
        setlastName(res.data.lastName);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  return (
    <div>
      <button onClick={accessDB}>Access Database</button>
    </div>
  );
}

export default Profile;

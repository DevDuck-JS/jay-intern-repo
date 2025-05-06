import React, { useEffect, useState } from "react";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get("/api/user").then((response) => {
      setUser(response.data);
    });
  }, []);

  return <div>{user ? `Hello, ${user.name}` : "Loading..."}</div>;
};

export default User;

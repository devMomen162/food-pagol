import React from "react";
import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <h1 className="text-3xl">Welcome, {user?.displayName}</h1>
    </div>
  );
};

export default UserHome;
import React from "react";
import { AuthProvider, useAuth } from "../../context/authContext";

export default function MyProgress() {
  const { userLoggedIn, currentUser } = useAuth();
  console.log(currentUser);
  return <div>user: {userLoggedIn}</div>;
}

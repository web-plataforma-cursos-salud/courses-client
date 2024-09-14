import React from "react";
import SearchBar from "./SearchBar";
import UserProfile from "./UserProfile";

export default function Navbar() {
  return (
    <div className="flex justify-around items-center flex-row w-full h-1/6">
      <SearchBar />
      <UserProfile userName={"Hernan"} />
    </div>
  );
}

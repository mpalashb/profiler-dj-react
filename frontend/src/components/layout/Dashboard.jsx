import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProfile } from "../../context/profile/profileContext";

const Dashboard = () => {
  const { profileState } = useProfile();
  if (profileState.id) {
    return null;
  }

  return (
    <>
      <h1 class="text-2xl text-center font-semibold mt-4">
        You haven't created a profile!{" "}
        <Link
          class="text-lg text-white font-semibold bg-green-500 ms-2 p-2 px-3 rounded-md hover:bg-green-400"
          to="/dashboard/create-profile"
        >
          Create Profile
        </Link>
      </h1>
      ;
    </>
  );
};

export default Dashboard;

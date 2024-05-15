import React from "react";
import { useProfile } from "../../context/profile/profileContext";

const HomeDash = () => {
  const { profileState } = useProfile();

  return (
    <div className="container mx-auto mt-10 px-4">
      {profileState.id ? (
        <h1 className="text-3xl font-bold mb-4">
          Welcome to Your Profile Dashboard
        </h1>
      ) : (
        <h1 className="text-3xl font-bold mb-4 text-center">Welcome!</h1>
      )}

      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-lg text-gray-700">You're logged in!</p>
        {profileState.id ? (
          <p className="text-gray-500 mt-2">Manage your profile here.</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default HomeDash;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProfile } from "../../context/profile/profileContext";

const ProfileEditForm = () => {
  const navigate_ = useNavigate();
  const { profileState, updateProfile } = useProfile();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const firstName = e.target.elements.first_name.value;
    const lastName = e.target.elements.last_name.value;

    const formData = new FormData();

    formData.append("first_name", firstName);

    formData.append("last_name", lastName);

    if (selectedFile) {
      formData.append("profile_pic", selectedFile);
    }

    updateProfile(formData, navigate_, "/dashboard/detail");
  };

  useEffect(() => {
    // Check if profileState.id exists and then navigate
    if (!profileState.id) {
      navigate_("/dashboard/detail");
    }
  }, [profileState.id]);

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="first_name"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            defaultValue={profileState.first_name}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="last_name"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            defaultValue={profileState.last_name}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="profile_pic"
            className="block text-sm font-medium text-gray-700"
          >
            Profile Picture
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default ProfileEditForm;

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useProfile } from "../../context/profile/profileContext";

const ProfileDetail = () => {
  const navigate_ = useNavigate();

  const { profileState, getProfile, delProfile } = useProfile();
  const { first_name, last_name, id, get_username, user, profile_pic } =
    profileState;

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getProfile();
  }, [id]);

  const handleDelete = () => {
    setShowModal(true);
  };

  const confirmDelete = () => {
    setShowModal(false);
    delProfile(navigate_, "/dashboard/create-profile");
  };
  useEffect(() => {
    // Check if profileState.id exists and then navigate
    if (profileState.id === 0) {
      navigate_("/dashboard/create-profile");
    }
  }, [profileState.id]);

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md">
      {/* <h2 className="text-2xl font-semibold mb-4">Profile Detail</h2> */}
      <div className="flex items-center space-x-4 pb-4">
        {profile_pic && (
          <img
            src={profile_pic}
            alt="User Avatar"
            className="w-48 h-48 rounded-full object-cover"
          />
        )}
        <div>
          <h1 className="text-lg font-semibold">{first_name}</h1>
          <h1 className="text-lg font-semibold">{last_name}</h1>
          {/* <h1 className="text-lg font-semibold">
            Name:{" "}
            {`${first_name ? first_name : ""} ${last_name ? last_name : ""}`}
          </h1> */}
          <p className="text-gray-600">@{get_username}</p>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold">User Information</h3>
        <p className="text-gray-600">ID: {id}</p>
        <p className="text-gray-600">Email: {user.email}</p>
        <p className="text-gray-600">Date Joined: {user.date_joined}</p>
        <div className="mt-4 flex items-center space-x-4">
          <Link
            to={"/dashboard/edit-profile"}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none focus:bg-blue-600"
          >
            Edit
          </Link>
          <button
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md focus:outline-none focus:bg-red-600"
          >
            Delete
          </button>
        </div>
        {showModal && (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <div className="inline-block align-top bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3
                        className="text-lg leading-6 font-medium text-gray-900"
                        id="modal-title"
                      >
                        Delete Profile
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Are you sure you want to delete this profile? This
                          action cannot be undone.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    onClick={confirmDelete}
                    className="w-full rounded-md border border-transparent shadow-sm px-6  bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => setShowModal(false)}
                    className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileDetail;

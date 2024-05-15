import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useProfile } from "../../context/profile/profileContext";

const Navbar = () => {
  const { profileState } = useProfile();
  const { pathname } = useLocation();
  // console.log(pathname);
  const { first_name, last_name, id, get_username, user, profile_pic } =
    profileState;

  const authView = (
    <>
      <div class="flex items-center space-x-4 pb-4">
        <h1 class="text-lg font-semibold mx-auto">User Dashboard</h1>
      </div>

      <div class="flex items-center space-x-4 pb-4">
        <h1 class="text-lg font-semibold mx-auto">User: {get_username}</h1>
      </div>

      <div class="flex items-center space-x-4">
        {profile_pic ? (
          <img
            src={profile_pic}
            alt="User Avatar"
            class="w-12 h-12 rounded-full mx-auto object-cover"
          />
        ) : (
          ""
        )}
      </div>
      <div class="flex items-center space-x-4 pt-2">
        <h1 class="text-lg font-semibold mx-auto">{`${
          first_name ? first_name : ""
        } ${last_name ? last_name : ""}`}</h1>
      </div>

      {id ? (
        <nav class="mt-4">
          <ul className="space-y-3">
            <li>
              <Link
                to="/dashboard"
                className={
                  pathname === "/dashboard" || pathname === "/dashboard/"
                    ? "block px-4 py-2 bg-violet-300 text-white rounded-md hover:bg-violet-400"
                    : "block px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-400"
                }
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/detail"
                className={
                  pathname === "/dashboard/detail" ||
                  pathname === "/dashboard/detail/"
                    ? "block px-4 py-2 bg-violet-300 text-white rounded-md hover:bg-violet-400"
                    : "block px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-400"
                }
              >
                My Profile
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/edit-profile"
                className={
                  pathname === "/dashboard/edit-profile" ||
                  pathname === "/dashboard/edit-profile/"
                    ? "block px-4 py-2 bg-violet-300 text-white rounded-md hover:bg-violet-400"
                    : "block px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-400"
                }
              >
                Edit Profile
              </Link>

              {/* <Link
                to={"/dashboard/edit-profile"}
                class="block px-4 py-2 bg-violet-600 text-white rounded-md hover:bg-violet-400"
              >
                Edit Profile
              </Link> */}
            </li>
          </ul>
        </nav>
      ) : (
        ""
      )}
    </>
  );
  return authView;
};

export default Navbar;

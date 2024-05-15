import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ProfileCreateForm from "./components/profile/ProfileCreateForm";
import ProfileEditForm from "./components/profile/ProfileEditForm";
import ProfileDetail from "./components/profile/ProfileDetail";
import HomeDash from "./components/profile/HomeDash";
import { useProfile } from "./context/profile/profileContext";
import Layout from "./components/layout/Layout";

function App() {
  const { profileState, getUser, getProfile } = useProfile();
  useEffect(() => {
    getUser();
    getProfile();
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/dashboard" element={<HomeDash />} />

          <Route
            path="dashboard/create-profile"
            element={<ProfileCreateForm />}
          />
          <Route path="dashboard/edit-profile" element={<ProfileEditForm />} />
          <Route path="dashboard/detail" element={<ProfileDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

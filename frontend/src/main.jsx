import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ProfileProvider } from "./context/profile/profileContext.jsx";
import { AlertProvider } from "./context/alerts/alertContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AlertProvider>
    <ProfileProvider>
      <App />
    </ProfileProvider>
  </AlertProvider>
);
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <AlertProvider>
//       <App />
//     </AlertProvider>
//   </React.StrictMode>
// );

// ReactDOM.render(
//   <AlertProvider>
//     <App />
//   </AlertProvider>,
//   document.getElementById("root")
// );

import React from "react";
import { useAlert } from "../../context/alerts/alertContext";

const Alerts = () => {
  const { alerts } = useAlert();

  return (
    <div>
      {alerts.map((alert) => (
        <div key={alert.id} className={`alert alert-${alert.type}`}>
          {alert.msg}
        </div>
      ))}
    </div>
  );
};

export default Alerts;

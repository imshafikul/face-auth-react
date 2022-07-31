import React from "react";
import "./SignInInfo.css";

export const SignInInfo = ({ facialId, payload = null, details = null }) => {
  return (
    <div className="info">
      <h3>Sign In Information</h3>

      <p className="flex">
        Facial ID:
        <span className="facial-id"> {facialId}</span>
      </p>
      {details && (
        <>
          <p>Gender: {details.gender}</p>
          <p>Age: {details.age}</p>
        </>
      )}
      {payload && (
        <>
          <p>Email: {payload.email}</p>
          <p>PIN: {payload.pin}</p>
        </>
      )}
    </div>
  );
};

import { useState } from "react";
const faceio = new faceIO("fioaddb4");

import "./App.css";

function App() {
  const handleEnrollment = async () => {
    try {
      const res = await faceio.enroll({
        locale: "auto",
        payload: {
          email: "shafikul.me@gmail.com",
          pin: 1700,
        },
      });

      console.log(`
        Unique Facial ID: ${res.facialId}
        Enrollment Date: ${res.timestamp}
        Gender: ${res?.details?.gender}
        Age: ${res?.details?.age}
      `);
    } catch (error) {}
  };

  const handleSignin = async () => {
    try {
      const res = await faceio.authenticate({
        locale: "auto",
      });

      console.log(`
        Unique Facial ID: ${res.facialId}
        Payload: ${res.payload}
      `);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Facial authentication</h1>
      <button onClick={handleEnrollment}>Signup</button>{" "}
      <button onClick={handleSignin}>Signin</button>
    </div>
  );
}

export default App;

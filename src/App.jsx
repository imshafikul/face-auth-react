import { useState } from "react";
const faceio = new faceIO("fioaddb4");
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { toastMessage } from "./utils/toastMessage";
import { SignInInfo } from "./components/SignInInfo";

function App() {
  const [signinInfo, setSigninInfo] = useState(null);

  const handleEnrollment = async () => {
    try {
      const res = await faceio.enroll({
        locale: "auto",
        payload: {
          email: "shafikul.me@gmail.com",
          pin: 1700,
        },
      });

      setSigninInfo({
        ...res,
      });
    } catch (error) {
      toastMessage({
        type: "error",
        message: "Failed entrollment process",
      });
    }
  };

  const handleSignin = async () => {
    try {
      const res = await faceio.authenticate({
        locale: "auto",
      });

      setSigninInfo({
        ...res,
      });
    } catch (error) {
      toastMessage({
        type: "error",
        message: "Authentication failed",
      });
    }
  };

  return (
    <div>
      <h1>Facial authentication</h1>
      <button onClick={handleEnrollment}>Signup</button>{" "}
      <button onClick={handleSignin}>Signin</button>
      <ToastContainer />
      {signinInfo && <SignInInfo {...signinInfo} />}
    </div>
  );
}

export default App;

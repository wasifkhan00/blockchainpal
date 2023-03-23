import React, { useState, useRef, useContext, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import HelperBtn from "./HelperBtn";
import { themeContext } from "../App";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";
import btcIcon from "./Images/btcIcon.png";

function Navbar(props) {
  const domElement = useRef(null);
  const secondElement = useRef(null);

  let { dark } = useContext(themeContext);
  const [userData, setUserdata] = useState({});
  const [loginState, setLoginState] = useState("LoggedOut");
  const clientID =
    "602617799028-e5pp15mqvicruors6pp603e20egv666l.apps.googleusercontent.com";

  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.auth2.init({ clientId: clientID });
    });
  }, [userData]);

  function responsiveNavbarHandler(e) {
    domElement.current.style.display = "flex";

    e.target.classList.toggle("yourclass");

    if (e.target.className === "yourclass") {
      if ((e.target.innerHTML = "&#9776;")) {
        domElement.current.style.display = "none";
      }
    } else {
      e.target.innerHTML = "X";
    }
  }

  const loginSuccessFully = (response) => {
    let data = response.profileObj;
    setLoginState("LoggedIn");
    setUserdata(data);

    alert(`Logged In Successfully as ${data.email}`);
    console.log(data);

    fetch("https://googlecreds.herokuapp.com/formData", {
      method: "POST",
      mode: "no-cors",
      cache: "no-cache",
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
  };

  const loginFailed = (error) => {
    console.log(error.type);
    alert(`Logged In failed due to ${error}`);
  };

  const logOutSuccess = (message) => {
    setLoginState("LoggedOut");
    alert("Logged Out Successfully");
  };

  const handleImgError = (e) => {
    e.target.src = btcIcon;
  };

  return (
    <>
      <div className={dark ? "Navbar dark" : "Navbar"}>
        <Link to="/">Empire Market</Link>

        <div
          ref={domElement}
          className={
            dark ? "listAndButtonsTogether dark" : "listAndButtonsTogether"
          }>
          <ul>
            <NavLink to="/">{props.firstC}</NavLink>
            <NavLink to="/dashboard">{props.secondC}</NavLink>
          </ul>

          <div className="btn_inputContainer">
            <HelperBtn />

            {loginState === "LoggedOut" && (
              <>
                <GoogleLogin
                  className="google"
                  render={(renderProps) => (
                    <button
                      className="login"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}>
                      Login
                    </button>
                  )}
                  isSignedIn={true}
                  clientId={clientID}
                  buttonText="Login"
                  onSuccess={loginSuccessFully}
                  onFailure={loginFailed}
                  cookiePolicy={"single_host_origin"}
                />
              </>
            )}

            {loginState === "LoggedIn" && (
              <>
                <GoogleLogout
                  render={(renderProps) => (
                    <option
                      className="logOut"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}>
                      Logout
                    </option>
                  )}
                  clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                  buttonText="Logout"
                  onLogoutSuccess={logOutSuccess}></GoogleLogout>
                <img
                  src={userData.imageUrl}
                  className="profileImage"
                  alt="profile"
                  onError={handleImgError}
                  referrerPolicy="no-referrer"
                />
              </>
            )}
          </div>
        </div>
        <div className="menuIconContainer">
          <label
            onClick={responsiveNavbarHandler}
            ref={secondElement}
            htmlFor="checkbox"
            id="menuIcon">
            &#9776;
          </label>
          <input type="checkbox" id="checkbox" />
        </div>
      </div>
    </>
  );
}

export default Navbar;

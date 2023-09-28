import { useEffect, useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

export default function LoginPage() {
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const togglePassVisibility = () => {
    setShowPass(showPass ? false : true);
  };

  const requestBody = {
    username: userName,
    password: userPass, //"83r5^_"
  };

  const handleClick = (e: any) => {
    e.preventDefault();

    if (userName === "" || userPass === "") {
      setError(true);
    } else {
      setError(false);

      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let raw = JSON.stringify(requestBody);

      let requestOptions: any = {
        method: "POST",
        headers: myHeaders,
        body: raw,
      };

      fetch("https://fakestoreapi.com/auth/login", requestOptions)
        .then((res) => {
          if (res.status == 200) {
            return res.json();
          } else {
            alert("Username and Password is incorrect");
          }
        })
        .then((data) => {
          sessionStorage.setItem("token", data.token);
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };

  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
          marginLeft: "18%",
        }}
      >
        <p style={{ color: "#B10F2E" }}>
          <b style={{fontStyle:"italic"}}>Warning: </b>
          <i>Please enter all the fields.</i>
        </p>
      </div>
    );
  };
  return (
    <>
      <div className="LoginFormPage">
        <form className="LoginForm" style={{ marginTop: "25px" }}>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            Login Here!
          </h2>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example1">
              Username
            </label>
            <input
              type="text"
              id="form2Example1"
              className="form-control"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="form2Example2">
              Password
            </label>
            <input
              type={showPass ? "text" : "password"}
              id="form2Example2"
              className="form-control"
              onChange={(e) => setUserPass(e.target.value)}
              style={{ position: "relative" }}
            />
            <FontAwesomeIcon
              style={{ position: "absolute", bottom: "49.7%", left: "59.5%" }}
              onClick={togglePassVisibility}
              icon={showPass ? faEyeSlash : faEye}
            />
          </div>
          <div className="messages">{errorMessage()}</div>
          <div className="forgotPassDiv row mb-4">
            <div className="col d-flex justify-content-center">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="form2Example31"
                />
                <label className="form-check-label" htmlFor="form2Example31">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>

            <div className="col">
              <a href="#!">Forgot password?</a>
            </div>
          </div>

          <div className="Buttons">
            <button
              className="btn btn-secondary"
              type="reset"
              value="Reset Form"
            >
              Reset
            </button>
            <button
              className="btn btn-primary "
              type="button"
              onClick={handleClick}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

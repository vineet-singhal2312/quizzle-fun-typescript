import { useEffect, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/auth-provider/authContextProvider";
import { Data } from "../signup/signupType";
import CircularProgress from "@material-ui/core/CircularProgress";

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoader, setIsLoader] = useState<boolean>(false);

  const {
    setToken,
    setLogin,
    isUserLogin,
    setUserName,
    loginFailedModel,
    setLoginFailedModel,
  } = useAuth();

  useEffect(() => {
    if (isUserLogin) {
      Logout();
    }
  });

  function loginUser(data: Data) {
    navigate("/quizzes");

    setUserName(data.userName);
    setToken(data.token);
    setLogin(true);
    setIsLoader(false);
    localStorage?.setItem(
      "login",
      JSON.stringify({
        isUserLoggedIn: true,
        token: data.token,
        name: data.userName,
      })
    );
  }
  function Logout() {
    localStorage?.removeItem("login");
    setLogin(false);
    setToken(null);
  }

  const LogInHandler = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoader(true);
    try {
      const res = await axios.post(
        // "http://localhost:8000/login",
        `https://quizzle-typescript.herokuapp.com/login`,

        {
          email,
          password,
        }
      );

      setEmail("");
      setPassword("");
      loginUser(res.data);
    } catch (isRequest) {
      setIsLoader(false);

      setLoginFailedModel(true);
      setTimeout(() => {
        setLoginFailedModel(false);
      }, 4000);
      setEmail("");
      setPassword("");
    }
  };

  const LogInAsGuest = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoader(true);
    try {
      const res = await axios.post(
        // "http://localhost:8000/login",
        `https://quizzle-typescript.herokuapp.com/login`,

        {
          email: "demoaccount@gmail.com",
          password: "123456",
        }
      );

      setEmail("");
      setPassword("");
      loginUser(res.data);
    } catch (isRequest) {
      setIsLoader(false);

      setLoginFailedModel(true);
      setTimeout(() => {
        setLoginFailedModel(false);
      }, 4000);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="login">
      <div className="login-box">
        {loginFailedModel && (
          <p className="login-fail">Invalid Email address and Password!!</p>
        )}
        <h2>Log In</h2>

        <form>
          <div className="user-box">
            <input
              required
              type="email"
              name=""
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>

          <div className="user-box">
            <input
              required
              type="password"
              name=""
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>password</label>
          </div>

          {isUserLogin ? (
            <button
              className="submit-button-login"
              disabled={false}
              id="submit-button-login"
              onClick={(e) => Logout()}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Log Out
            </button>
          ) : (
            <button
              className="submit-button-login"
              disabled={isLoader}
              id="submit-button-login"
              onClick={(e) => LogInHandler(e)}
              type="submit"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Log In
            </button>
          )}
          <button
            className="submit-button-login"
            disabled={isLoader}
            id="submit-button-login"
            onClick={(e) => LogInAsGuest(e)}
            type="submit"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Guest
          </button>
          <p className="switch-page-description">
            create an account{" "}
            <Link to="/sign-up" className="switch-page-link">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
      {isLoader && <CircularProgress id="loader" />}
    </div>
  );
};

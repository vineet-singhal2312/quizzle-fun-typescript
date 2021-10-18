import { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();

  const SignUpHandler = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await axios.post(
        // "http://localhost:8000/signup",
        `https://quizzle-typescript.herokuapp.com/signup`,

        {
          userName,
          email,
          password: password1,
          confirmPassword: password2,
        }
      );

      setUserName("");
      setEmail("");
      setPassword1("");
      setPassword2("");
      navigate("/");
    } catch (error) {
      console.log(error.data);
    }
  };

  return (
    <div className="login">
      <div className="login-box">
        <h2>Sign Up</h2>
        <form>
          <div className="user-box">
            <input
              type="text"
              name=""
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <label>User Name</label>
          </div>
          <div className="user-box">
            <input
              type="email"
              name=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name=""
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
            />
            <label>password</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name=""
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
            />
            <label>confirm password</label>
          </div>
          <p className="switch-page-description">
            already a user{" "}
            <Link to="/" className="switch-page-link">
              Log In
            </Link>
          </p>
          <button
            className="submit-button"
            disabled={false}
            id="submit-button"
            onClick={(e) => SignUpHandler(e)}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

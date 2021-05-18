import { Header } from "../header/Header";
import "./Login.css";

export const Login = () => {
  return (
    <div className="login">
      {/* <Header heading="" /> */}

      <div className="login-box">
        <h2>Enter Your Name</h2>
        <form>
          <div className="user-box">
            <input type="text" name="" />
            <label>Username</label>
          </div>
          {/* <div className="user-box">
            <input type="password" name="" />
            <label>Password</label>
          </div> */}
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
    </div>
  );
};

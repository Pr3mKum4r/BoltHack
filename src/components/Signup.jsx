import { useState } from "react";
import "./Signup.css";
import { useUserAuth } from "../context/UserAuthContext";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
  const [isError, setIsError] = useState("span");
  const { signUp, logInWithGoogle } = useUserAuth();

  const navigate = useNavigate();

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const cnfPasswordHandler = (event) => {
    setCnfPassword(event.target.value);
  };
  const submitHandler = async () => {
    try {
      if (password === cnfPassword) {
        setIsError("span");
        await signUp(email, password);
        navigate("/login");
      } 
      else if (password !== cnfPassword) {
        setIsError("error");
      }
    } catch (err) {
        console.log(err.code);
    }
  };

  return (
    <div className="form-container">
      <div className="form">
        <div className="title">Welcome</div>
        <div className="subtitle">Let's create your account!</div>
        <div className="input-container ic2">
          <input
            id="email"
            className="input"
            type="text"
            placeholder=" "
            onChange={emailHandler}
            value={email}
          />
          <div className="cut cut-short"></div>
          <label for="email" className="placeholder">
            Email
          </label>
        </div>
        <div className="input-container ic2">
          <input
            id="password"
            className="input"
            type="password"
            placeholder=" "
            onChange={passwordHandler}
            value={password}
          />
          <div className="cut cut-long"></div>
          <label for="password" className="placeholder">
            Password
          </label>
        </div>
        <div className="input-container ic2">
          <input
            id="cnf-password"
            className="input"
            type="password"
            placeholder=" "
            onChange={cnfPasswordHandler}
            value={cnfPassword}
          />
          <div className="cut cut-xl"></div>
          <label for="cnf-password" className="placeholder">
            Confirm Password
          </label>
        </div>
        <span className={isError}>Passwords Do Not Match</span>
        <button type="text" className="submit" onClick={submitHandler}>
          Sign Up
        </button>
        <p className='login-signup-p'>Already have an account? <Link to='/login'>Login</Link></p>
      </div>
    </div>
  );
};

export default Signup;

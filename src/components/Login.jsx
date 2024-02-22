import { useState } from "react";
import "./Login.css";
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { logIn, logInWithGoogle } = useUserAuth();

    const navigate = useNavigate();

    const emailHandler = (event) =>{
        setEmail(event.target.value);
    }
    const passwordHandler = (event) =>{
        setPassword(event.target.value);
    }
    const submitHandler = async () =>{
      try {
        // setIsLoading(true);
        await logIn(email, password);
        console.log('Logged In Successfully')
        // setIsLoading(false);
        navigate("/carform");
      }
      catch (err) {
        // setError(authErrorCodesToMsgs(err.code));
        // setIsLoading(false);
        console.log(err.code);
      }
    }

  return (
    <div className="form-container">
      <div className="login-form">
        <div className="title">Welcome</div>
        <div className="subtitle">Let's Login into your account</div>
        <div className="input-container ic2">
          <input id="email" className="input" type="text" placeholder=" " onChange={emailHandler} value={email}/>
          <div className="cut cut-short"></div>
          <label for="email" className="placeholder">
            Email
          </label>
        </div>
        <div className="input-container ic2">
          <input id="password" className="input" type="password" placeholder=" " onChange={passwordHandler} value={password}/>
          <div className="cut"></div>
          <label for="password" className="placeholder">
            Password
          </label>
        </div>
        <button type="text" className="submit" onClick={submitHandler}>
          Login
        </button>
        <p className='login-signup-p'>Dont have an account? <Link to='/signup'>Signup</Link></p>
      </div>
    </div>
  );
};

export default Login;

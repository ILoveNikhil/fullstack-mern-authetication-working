// src/components/Auth/Signup.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SignupUser } from "../../Redux/Action/UserAction";
import { useAlert } from "react-alert";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error } = useSelector((state) => state.user);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(
      "fullName : ",
      fullName,
      "userName : ",
      userName,
      "phoneNumber : ",
      phoneNumber,
      "email : ",
      email,
      "password : ",
      password
    );
    dispatch(SignupUser(fullName, userName, phoneNumber, email, password));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch({ type: "clearErrors" });
    }
  }, [dispatch, error, alert]);
  //
  return (
    <div>
      <form onSubmit={submitHandler}>
        <h1>Sign Up</h1>
        <input
          type="text"
          placeholder="Full Name"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="text"
          placeholder="@Username"
          required
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="Number"
          placeholder="Phone Number"
          required
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Link to="/">
          <h4>Already Signed Up? Login Now</h4>
        </Link>

        <button disabled={loading} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;

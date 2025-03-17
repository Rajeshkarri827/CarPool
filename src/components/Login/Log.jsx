import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import "./Log.css";
import LoginImage from "../../assets/logimg.png";
import {
  getAuth,
  GoogleAuthProvider,
  signInAnonymously,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

const auth = getAuth();
const Googleprovider = new GoogleAuthProvider();


function Log() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      // Login successful
      setLoading(false);
      navigate("/dashboard"); // Navigate to dashboard after successful login
    } catch (error) {
      setLoading(false);
      setError("Invalid email or password. Please try again.");
      console.error("Login error:", error.message);
    }
  };

  const handlegooglelogin = async () => {
    try {
      await signInWithPopup(auth, Googleprovider);
      console.log("Google login successful");
      alert("Google login successful");
    } catch (err) {
      console.log(err);
      alert("Error occurred during Google login");
    }
  };
  
  const handleguestlogin = async() => {
    try{
      await signInAnonymously(auth)
      alert("guest login successfull")
    }
    catch(err) {
      console.log(err)
      alert("error occured")
    }
  }

  return (
    <div className="login-container">
      {/* Image section with slide-in from left animation */}
      <motion.div
        className="login-image-container"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {<img src={LoginImage} alt="Login Visual" className="login-image" />}
      </motion.div>

      {/* Login form with slide-in from right animation */}
      <motion.div
        className="login-form-container"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="login-card">
          <h2 className="login-title">Welcome Back</h2>
          <p className="login-subtitle">Please Log in to continue</p>

          {error && <div className="error-message">{error}</div>}

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="••••••••"
              />
            </div>

            <div className="forgot-password">
              <span onClick={() => navigate("/forgot-password")}>
                Forgot Password?
              </span>
            </div>

            <button
              type="submit"
              className={`login-button ${loading ? "loading" : ""}`}
              disabled={loading}
            >
             <Link to={"/offerpage"}>{loading ? "Signing In..." : "Log In"} </Link>
            </button>

            <button onClick={handlegooglelogin}>Google Login</button>
            <button onClick={handleguestlogin}>Guest Login</button>
          </form>

          <div className="register-link">
            <p>
              Don't have an account? <Link to={"/register"}>Sign Up</Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Log;

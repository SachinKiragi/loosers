import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";

// Analytics
import { analytics } from "../firebase";
import { logEvent } from "firebase/analytics";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  // Log page_view on mount
  useEffect(() => {
    if (analytics) {
      logEvent(analytics, "page_view", {
        page_path: window.location.pathname
      });
    }
  }, []);

  const login = () => {
    if (analytics) {
      logEvent(analytics, "login_attempt");
    }
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        if (analytics) {
          logEvent(analytics, "login_success");
        }
        navigate("/dashboard");
      })
      .catch(err => {
        if (analytics) {
          logEvent(analytics, "login_error", { error: err.message });
        }
        setMsg(err.message);
      });
  };

  const signup = () => {
    if (analytics) {
      logEvent(analytics, "signup_attempt");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        if (analytics) {
          logEvent(analytics, "signup_success");
        }
        navigate("/dashboard");
      })
      .catch(err => {
        if (analytics) {
          logEvent(analytics, "signup_error", { error: err.message });
        }
        setMsg(err.message);
      });
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Let’s Get You Logged In</h2>
        <input
          type="email"
          className="auth-input"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="auth-input"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button className="auth-button login-btn" onClick={login}>
          Login
        </button>
        <button className="auth-button login-btn" onClick={signup}>
          Sign Up
        </button>
        {msg && <p className="auth-message">{msg}</p>}
      </div>
    </div>
  );
};

export default Login;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from '@paire/card';

import { useAuth } from "../../contexts";

export function Login() {
  const navigate = useNavigate();
  const auth = useAuth();

  const loginClick = async () => {
    auth.signin({ username: "test", password: "test" });
  };

  useEffect(() => {
    if (auth.user?.id) {
      navigate("/home");
    }
  }, [auth.user?.id, navigate]);

  return (
    <div className="App">
      <Card text="You are not logged in" />
      <button onClick={loginClick}>Login</button>
    </div>
  )
}

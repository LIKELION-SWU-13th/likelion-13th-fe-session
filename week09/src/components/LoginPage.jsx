import React from "react";
import LoginForm from "./LoginForm";
import LoginFooter from "./LoginFooter"; 

function LoginPage() {
  return (
    <div className="login">
      <div className="login_background">
        <img
          className="login_logo"
          src="/logo.png"
          alt="Netflix Logo"
        />
        <div className="login_gradient" />
      </div>

      <div className="login_body">
        <h1>로그인</h1>
        <LoginForm />
        <LoginFooter />
      </div>
    </div>
  );
}

export default LoginPage;

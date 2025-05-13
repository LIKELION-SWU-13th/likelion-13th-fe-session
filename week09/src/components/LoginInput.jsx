import React from "react";

function LoginInput({ type, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="login_input"
      value={value}
      onChange={onChange}
    />
  );
}

export default LoginInput;

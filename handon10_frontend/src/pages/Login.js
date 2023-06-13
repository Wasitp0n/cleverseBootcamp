import React from "react";

function Login() {
  function Input(props) {
    return <input type={props.type} placeholder={props.placeholder} />;
  }

  return (
    <form>
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
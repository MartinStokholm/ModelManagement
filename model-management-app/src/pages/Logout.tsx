import React from "react";

const Logout = () => {
  return (
    <>
      {localStorage.removeItem("token")}
      {localStorage.removeItem("pwd")}
      {localStorage.removeItem("user")}
      <div>You are now loged out</div>
    </>
  );
};

export default Logout;

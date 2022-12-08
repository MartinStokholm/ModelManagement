const Logout = () => {
  return (
    <>
      {localStorage.removeItem("token")}
      {localStorage.removeItem("pwd")}
      {localStorage.removeItem("user")}
      {localStorage.removeItem("role")}

      <div>You are now loged out</div>
    </>
  );
};

export default Logout;

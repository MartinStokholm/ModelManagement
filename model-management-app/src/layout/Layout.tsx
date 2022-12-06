import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./Header";
import Meta from "./Meta";

const Layout = () => {
  return (
    <>
      <ToastContainer />
      <Meta />
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;

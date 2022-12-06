import { useContext } from "react";
import AuthContext from "./AuthProvider";

const useAuth = () => {
  return useContext<any>(AuthContext);
};

export default useAuth;

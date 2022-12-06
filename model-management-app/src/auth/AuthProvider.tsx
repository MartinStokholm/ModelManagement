import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }: { children: any }) => {
  const [auth, setAuth] = useState<any>({});
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

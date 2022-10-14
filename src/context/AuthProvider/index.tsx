import { createContext, useContext, useState } from "react";
import { AuthContextProps, AuthProviderProps, UserProps } from "./type";
import { loginUser } from "./util";

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>()

  const authenticate = async (email: string, password: string) => {
    const response = await loginUser(email, password)
   
    return response
  } 

  return (
    <AuthContext.Provider value={{ authenticate, ...user }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
import { ReactNode } from "react"

export interface UserProps {
  email?: string,
  password?: string
}

export interface AuthContextProps extends UserProps {
  authenticate: (email: string, password: string) => {}
}

export interface AuthProviderProps {
  children: ReactNode
}
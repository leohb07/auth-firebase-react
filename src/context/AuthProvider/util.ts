import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../services/Firebase/config"; 
import { UserProps } from "./type";

const auth = getAuth(app)

export const loginUser = async (email: string, password: string) => {
  try {
    const request = await signInWithEmailAndPassword(auth, email, password)
  
    return request.user
  } catch (error: any) {
    return null
  }
}
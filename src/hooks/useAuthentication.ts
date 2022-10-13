import { app } from '../services/Firebase/config'
 
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  updateProfile, 
  signOut 
} from 'firebase/auth'
import { ReactNode, useEffect, useState } from 'react'

interface UserProps {
  userName?: string,
  email: string,
  password: string
}

export const useAuthentication = () => {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const [cancelled, setCancelled] = useState(false)

  const auth = getAuth(app)

  function checkIsCancelled() {
    if(cancelled) {
      return
    }
  }  

  const createUser = async (data: UserProps) => {
    checkIsCancelled()
    setLoading(true)
    setError('')
    setSuccess('')

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth, 
        data.email,
        data.password
      )

      await updateProfile(user, {
        displayName: data.userName
      })

      setLoading(false)
      setSuccess('Usuário cadastrado com sucesso !')
      return user
      
    } catch (error: any) {
      let systemErrorMessage

      if(error.message.includes("Password")) {
        systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres"
      } else if(error.message.includes("email-already")) {
        systemErrorMessage = "E-mail já cadastrado"
      } else {
        systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde."
      }

      setLoading(false)
      setError(systemErrorMessage)
    }
  }

  useEffect(() => {
    return () => setCancelled(true)
  }, [])

  return {
    auth,
    createUser,
    error,
    success,
    loading
  }
}
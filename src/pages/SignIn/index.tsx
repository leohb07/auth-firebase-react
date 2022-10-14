import { Button, Flex, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthProvider"; 

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { authenticate } = useAuthContext()

  const handleSubmitLogin = async (event: FormEvent) => {
    event?.preventDefault()

    const res = await authenticate(email , password) 
    console.log(res)
  }

  return (
    <Flex w='100%' h='100vh' flexDir='column' justify='center' align='center' px='2'>
      <Heading mb='4'>Sign In</Heading>

      <Flex
        as='form'
        justify='center'
        align='center'
        flexDir='column'
        w='26.5rem'
        onSubmit={handleSubmitLogin}
      >
        <FormControl>
          <FormLabel>E-mail</FormLabel>
          <Input 
            value={email} 
            onChange={(event) => setEmail(event.target.value)}
          />
        </FormControl>

        <FormControl mt='4'>
          <FormLabel>Password</FormLabel>
          <Input 
            type='password' 
            value={password} 
            onChange={(event) => setPassword(event.target.value)}
          />
        </FormControl>

        <Button type='submit' colorScheme='green' w='100%' mt='8'>Sign In</Button>
      </Flex>
    </Flex>
  )
}
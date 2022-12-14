import { Flex, Heading, Button, FormControl, FormLabel, Input, Alert, AlertIcon, Spinner } from "@chakra-ui/react";
import { FormEvent, useEffect, useState } from "react";

export function SignUp() {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [error, setError] = useState('')


  const handleSubmit = async (event: FormEvent) => {
    event?.preventDefault()
    setError('')

    const user = {
      userName,
      email,
      password
    }

    if (password !== passwordConfirm) {
      return setError('As senhas não são iguais!')
    }

    setUserName('')
    setEmail('')
    setPassword('')
    setPasswordConfirm('')
  }


  return (
    <Flex w='100%' h='100vh' justify='center' align='center' flexDir='column' px='2'>
      <Heading mb='4'>SignUp</Heading>

      <Flex as='form' justify='center' align='center' flexDir='column' w='26.5rem' onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input value={userName} onChange={(event) => setUserName(event.target.value)} />
        </FormControl>

        <FormControl my='4' isRequired>
          <FormLabel>E-mail</FormLabel>
          <Input type='email' value={email} onChange={(event) => setEmail(event.target.value)} />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input type='password' value={password} onChange={(event) => setPassword(event.target.value)} />
        </FormControl>

        <FormControl mt='4' isRequired>
          <FormLabel>Password Confirm</FormLabel>
          <Input type='password' value={passwordConfirm} onChange={(event) => setPasswordConfirm(event.target.value)} />
        </FormControl>

        <Button
          type='submit'
          mt='8'
          w='100%'
          colorScheme='green'>
          Cadastrar
        </Button>

        {error
          ? <Alert status='error' mt='6'>
            <AlertIcon />
            {error}
          </Alert>
          : null
        }
      </Flex>
    </Flex>
  )
}
import { Button, Flex, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";

export function SignIn() {
  return (
    <Flex w='100%' h='100vh' flexDir='column' justify='center' align='center' px='2'>
      <Heading mb='4'>Sign In</Heading>

      <Flex as='form' justify='center' align='center' flexDir='column' w='26.5rem'>
        <FormControl>
          <FormLabel>E-mail</FormLabel>
          <Input />
        </FormControl>

        <FormControl mt='4'>
          <FormLabel>Password</FormLabel>
          <Input type='password' />
        </FormControl>

        <Button type='submit' colorScheme='green' w='100%' mt='8'>Sign In</Button>
      </Flex>
    </Flex>
  )
}
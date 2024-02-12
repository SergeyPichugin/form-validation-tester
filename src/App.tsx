import { Button, Input, Box, Checkbox, chakra } from '@chakra-ui/react'

function App() {

  return (
    <>
    <div>
      Приложение <Button variant={'outline'} size={'xs'} colorScheme={'cyan'}>Test Button</Button>      
    </div>
    
    <div>
      <Input colorScheme={'teal'} _hover={{
        bacground: 'white',
        color: 'teal.700'
      }}/>
      <Checkbox>Checkbox</Checkbox>
    </div>
    <Box color='red.400' m={2}>Tomato</Box>
    <Box maxW="960px" mx="auto" backgroundColor={'tomato'}>
    <Input colorScheme={'teal'} _hover={{
        bacground: 'white',
        color: 'teal.700'
      }}/>
      <Checkbox>Checkbox</Checkbox>
      <chakra.button 
        px='3'
        py='2'
        bg='green.200'
        rounded='md'
        _hover={{ bg: 'green.300' }}>
      123
      </chakra.button>
    </Box>
    </>
  )
}

export default App

import { Box, Heading, Input, Stack, Button, Text, Flex, Spacer } from "@chakra-ui/react";

const StoreItem = ({title, size})=>{
    return <Box p={4} borderRadius="lg" borderWidth="1px">
        <Flex alignItems="center">
        <Heading size="md">{title}</Heading>
        <Spacer/>
        <Text>{size}</Text>
        </Flex>
    </Box>
}
  
function Store({items}){
    return <Box padding={4}>
        <Stack>
        {items.map(item=>{
           return <StoreItem title={item.title} size={item.size}/>
        })}
        </Stack>
        <Input mt={10} placeholder="app name"/>
        <Button mt={2}>Search</Button>
    </Box>
}
export default Store;
import { Box, Heading, Input, Stack, Button } from "@chakra-ui/react";

const StoreItem = ({title})=>{
    return <Box p={4} borderRadius="lg" borderWidth="1px">
        <Heading size="md">{title}</Heading>
    </Box>
}

function Store({items}){
    return <Box>
        <Stack>
        {items.map(item=>{
           return <StoreItem title={item}/>
        })}
        </Stack>
        <Input mt={10} placeholder="application name"/>
        <Button>Search for applications </Button>
    </Box>
}
export default Store;
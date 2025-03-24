import { Flex, IconButton, Input} from '@chakra-ui/react';
import { SearchIcon } from "@chakra-ui/icons";

export default function Search() {
   return (
       <Flex>

        <Input
        placeholder='Search for things...'
        />
        <IconButton 
        icon={<SearchIcon />}
        aria-label="Search"
        />
        

       </Flex>
   );
}
import { categories } from "../../data/categories.js";
import { purposes } from "../../data/purpose.js";
import { useLocation, useNavigate } from "react-router";

import { Box, VStack, Text, RadioGroup, Radio } from "@chakra-ui/react";

export default function CategorySidebar() {

    const navigate = useNavigate();
    const location = useLocation();

    const params = new URLSearchParams(location.search);
    const selectedCategory = params.get('category');
    const selectedPurpose = params.get('purpose');

    const categoryChangeHandler = (value) => {
      const params = new URLSearchParams(location.search);

      if (value) {
        params.set("category", value)
      } else {
        params.delete("category"); 
      }

      navigate({ search: params.toString() });

      };

    const purposeChangeHandler = (value) => {
      const params = new URLSearchParams(location.search);
        if (value) {
            params.set("purpose", value);
        }  else {
        params.delete("purpose");
      }
  
      navigate({ search: params.toString() });
      };

   return (
       <Box width={{ base: "full", md: "250px" }} bg="gray.100" p={4} boxShadow="md">
      <VStack align="start" spacing={4}>
        <Text fontSize="xl" fontWeight="bold" mb={2}>Categories</Text>

        <RadioGroup onChange={categoryChangeHandler} value={selectedCategory}>
                    {categories.map((category) => (
                        <Radio
                            key={category.name}
                            value={category.name}
                        >
                            {category.name}
                        </Radio>
                    ))}
                </RadioGroup>

        <Text fontSize="xl" fontWeight="bold" mt={6} mb={2}>Purpose</Text>
        <RadioGroup onChange={purposeChangeHandler} value={selectedPurpose}>
                    {purposes.map((purpose) => (
                        <Radio
                            key={purpose.name}
                            value={purpose.name}
                        >
                            {purpose.name}
                        </Radio>
                    ))}
                </RadioGroup>
      </VStack>
    </Box>
   );
}
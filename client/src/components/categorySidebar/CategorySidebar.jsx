import { categories } from "../../data/categories.js";
import { purposes } from "../../data/purpose.js";
import { useLocation, useNavigate } from "react-router";

import { Box, VStack, Checkbox, Text } from "@chakra-ui/react";

export default function CategorySidebar() {

    const navigate = useNavigate();
    const location = useLocation();

    const params = new URLSearchParams(location.search);
    const selectedCategory = params.get('category');
    const selectedPurpose = params.get('purpose');

    const categoryChangeHandler = (e) => {
      const category = e.target.value;
      const checked = e.target.checked;

      const params = new URLSearchParams(location.search);

      if (checked) {
        params.set("category", category)
      } else {
        params.delete("category"); 
      }

      navigate({ search: params.toString() });

      };

    const purposeChangeHandler = (e) => {
      const purpose = e.target.value;
      const checked = e.target.checked;

      const params = new URLSearchParams(location.search);
  
      if (checked) {
        params.set("purpose", purpose);
      } else {
        params.delete("purpose");
      }
  
      navigate({ search: params.toString() });
      };

   return (
       <Box width={{ base: "full", md: "250px" }} bg="gray.100" p={4} boxShadow="md">
      <VStack align="start" spacing={4}>
        <Text fontSize="xl" fontWeight="bold" mb={2}>Categories</Text>
        {categories.map((category) => (
          <Checkbox
            key={category.name}
            value={category.name}
            defaultChecked={selectedCategory === category.name}
            onChange={categoryChangeHandler}
          >
            {category.name}
          </Checkbox>
        ))}

        <Text fontSize="xl" fontWeight="bold" mt={6} mb={2}>Purpose</Text>
        {purposes.map((purpose) => (
          <Checkbox
            key={purpose.name}
            value={purpose.name}
            defaultChecked={selectedPurpose === purpose.name}
            onChange={purposeChangeHandler}
          >
            {purpose.name}
          </Checkbox>
        ))}
      </VStack>
    </Box>
   );
}
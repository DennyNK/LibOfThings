import { categories } from "../../data/categories.js";
import { purposes } from "../../data/purpose.js";
import { useLocation, useNavigate } from "react-router";

import { Box, VStack, Checkbox, Text } from "@chakra-ui/react";

export default function CategorySidebar({
    setSelectedCategory,
    setSelectedPurpose
}) {

    const navigate = useNavigate();
    const location = useLocation();

    const categoryChangeHandler = (category) => {
        setSelectedCategory(category);
        const params = new URLSearchParams(location.search);
        params.set('category', category); // Set the selected category in URL
        navigate(`?${params.toString()}`);
      };

    const purposeChangeHandler = (purpose) => {
        setSelectedPurpose(purpose);
        const params = new URLSearchParams(location.search);
        params.set('purpose', purpose); // Set the selected purpose in URL
        navigate(`?${params.toString()}`);
      };

   return (
       <Box width={{ base: "full", md: "250px" }} bg="gray.100" p={4} boxShadow="md">
      <VStack align="start" spacing={4}>
        <Text fontSize="xl" fontWeight="bold" mb={2}>Categories</Text>
        {categories.map((category) => (
          <Checkbox
            key={category.name}
            value={category.name}
            onChange={(e) => categoryChangeHandler(e.target.value)}
          >
            {category.name}
          </Checkbox>
        ))}

        <Text fontSize="xl" fontWeight="bold" mt={6} mb={2}>Purpose</Text>
        {purposes.map((purpose) => (
          <Checkbox
            key={purpose.name}
            value={purpose.name}
            onChange={(e) => purposeChangeHandler(e.target.value)}
          >
            {purpose.name}
          </Checkbox>
        ))}
      </VStack>
    </Box>
   );
}
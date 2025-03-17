import { Box, VStack, Checkbox, Text } from "@chakra-ui/react";
import { categories } from "../../data/categories.js";
import { purposes } from "../../data/purpose.js";

export default function CategorySidebar({
    setSelectedCategory,
    setSelectedPurpose
}) {

   return (
       <Box width={{ base: "full", md: "250px" }} bg="gray.100" p={4} boxShadow="md">
      <VStack align="start" spacing={4}>
        <Text fontSize="xl" fontWeight="bold" mb={2}>Categories</Text>
        {categories.map((category) => (
          <Checkbox
            key={category.name}
            value={category.name}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {category.name}
          </Checkbox>
        ))}

        <Text fontSize="xl" fontWeight="bold" mt={6} mb={2}>Purpose</Text>
        {purposes.map((purpose) => (
          <Checkbox
            key={purpose.name}
            value={purpose.name}
            onChange={(e) => setSelectedPurpose(e.target.value)}
          >
            {purpose.name}
          </Checkbox>
        ))}
      </VStack>
    </Box>
   );
}
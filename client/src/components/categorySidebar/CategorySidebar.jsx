import { categories } from "../../data/categories.js";
import { purposes } from "../../data/purpose.js";
import { useLocation, useNavigate } from "react-router";

import { Box, VStack, Text, RadioGroup, Radio, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function CategorySidebar() {

  const navigate = useNavigate();
  const location = useLocation();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPurpose, setSelectedPurpose] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    const purpose = params.get('purpose');


    setSelectedCategory(category || '');
    setSelectedPurpose(purpose || '');
  }, [location.search]);

  const categoryChangeHandler = (value) => {
    setSelectedCategory(value)
    const params = new URLSearchParams(location.search);

    if (value) {
      params.set("category", value)
    } else {
      params.delete("category");
    }

    navigate({ search: params.toString() });
  };

  const purposeChangeHandler = (value) => {
    setSelectedPurpose(value);
    const params = new URLSearchParams(location.search);
    if (value) {
      params.set("purpose", value);
    } else {
      params.delete("purpose");
    }

    navigate({ search: params.toString() });
  };

  const clearFilterHandler = () => {
    const params = new URLSearchParams();

    setSelectedCategory('');
    setSelectedPurpose('');

    navigate(`/catalog?${params.toString()}`, { replace: true });
  }

  return (
    <Box width={{ base: "full", md: "250px" }} bg="gray.50" p={4} boxShadow="md">
      <VStack align="start" spacing={4} color="purple.700">
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

        <Button onClick={clearFilterHandler} colorScheme="purple">Clear filters</Button>
      </VStack>
    </Box>
  );
}
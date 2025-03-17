import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    peach: {
      500: '#FFDAB9', // Peach color
      400: '#FFB89B', // Lighter peach for hover
    },
    coral: {
      500: '#FF7F50', // Coral color
      400: '#FF6347', // Lighter coral for hover
    },
    purple: {
        500: '#9B4DCA',  // Vibrant purple (for button or text)
        400: '#A45EE8',  // Lighter purple for hover effect
        600: '#6A1B9A',  // Darker purple (for active or focused button)
      },
  },
});

export default theme;

import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    peach: {
      100: '#FCE5C6',
      200: '#F9D7A6',
      300: '#F7C28D',
      400: '#F4A674',
      500: '#F18A5C',
      600: '#F07549',
      700: '#E85F36',
      800: '#E14A24',
      900: '#D53412',
    },
    coral: {
      100: '#FFDAB9',
      200: '#FFCC99',
      300: '#FFBF7A',
      400: '#FFB05C',
      500: '#FF9A3E',
      600: '#FF8C29',
      700: '#FF7D13',
      800: '#E66C11',
      900: '#D55A0F',
    },
    purple: {
      100: '#E6D4FF',
      200: '#D0A9FF',
      300: '#B67DFF',
      400: '#9C52FF',
      500: '#8A27FF',
      600: '#7200E6',
      700: '#5C00B8',
      800: '#46008A',
      900: '#30005C',
    },
  },
});

export default theme;
import {
  extendTheme,
  theme as base,
  withDefaultVariant,
} from '@chakra-ui/react';

import { ORGANGE, TEAL, TEAL_DARK, TEAL_SECONDARY, TEAL_GREY } from './Colors';

const theme = extendTheme(
  {
    colors: {
      brand: {
        primary: TEAL,
        secondary: ORGANGE,
        primary_dark: TEAL_DARK,
        primary_secondary: TEAL_SECONDARY,
        primary_grey: TEAL_GREY,
      },
    },
    styles: {
      global: {
        'html, body': {
          color: 'white',
          background: TEAL_DARK,
          lineHeight: 1.2,
        },
      },
    },
    fonts: {
      body: `Rubik, ${base.fonts?.body}`,
    },
    components: {
      Input: {
        variants: {
          filled: {
            field: {
              _hover: {
                borderColor: 'brand.primary_grey',
                backgroundColor: 'brand.primary_secondary',
              },
              _focus: {
                borderColor: 'brand.primary_grey',
                backgroundColor: 'brand.primary_secondary',
              },
              backgroundColor: 'brand.primary_secondary',
            },
          },
        },
      },
    },
  },
  withDefaultVariant({
    variant: 'filled',
    components: ['Input'],
  })
);

export default theme;

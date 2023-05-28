import type { DeepPartial, Theme } from '@chakra-ui/react';

export const styles: DeepPartial<Theme['styles']> = {
  global: {
    'body::-webkit-scrollbar': {
      width: '10px',
    },
    'body::-webkit-scrollbar-track': {
      background: 'black',
    },
    'body::-webkit-scrollbar-thumb': {
      background: '#454545',
      borderRadius: '3px',
    },
    'body::-webkit-scrollbar-thumb:hover': {
      background: 'grey',
    },
  },
};
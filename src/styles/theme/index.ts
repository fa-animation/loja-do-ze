import { extendTheme } from '@chakra-ui/react';

import { colors } from './foundations/colors';
import { config } from './foundations/config';
import { fonts, fontWeights, fontSizes } from './foundations/fonts';
import { radii } from './foundations/radii';

const customTheme = extendTheme({
  radii,
  fonts,
  fontWeights,
  fontSizes,
  colors,
  config,
});

export default customTheme;

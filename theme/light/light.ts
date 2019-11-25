import { colorGroups } from '../template/colors';
import { spacing } from '../template/spacing';
import { t } from '../template/t';
import { Theme } from '../template/theme';

export const lightTheme: Theme = {
  colors: {
    ...colorGroups,
    primary: {
      hover: colorGroups.group1.three,
      disabled: colorGroups.group1.one,
      base: colorGroups.group1.three,
      accent: colorGroups.group1.one
    },
    secondary: {
      hover: colorGroups.group2.four,
      disabled: colorGroups.group2.one,
      base: colorGroups.group2.one,
      accent: colorGroups.group2.two
    },
    tertiary: {
      hover: colorGroups.group3.four,
      disabled: colorGroups.group3.one,
      base: colorGroups.group3.one,
      accent: colorGroups.group3.two
    },
    background: colorGroups.group4.one,
    footer: colorGroups.group4.two,
    menu: colorGroups.group4.three,
    accent: colorGroups.group4.five
  },
  spacing,
  t,
  transition: 'all 0.5s ease'
};

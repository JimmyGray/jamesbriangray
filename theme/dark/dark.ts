import { colorGroups } from '../template/colors';
import { spacing } from '../template/spacing';
import { t } from '../template/t';
import { Theme } from '../template/theme';

export const darkTheme: Theme = {
  colors: {
    ...colorGroups,
    primary: {
      hover: colorGroups.group1.five,
      disabled: colorGroups.group1.one,
      base: colorGroups.group1.three,
      accent: colorGroups.group1.one
    },
    secondary: {
      hover: colorGroups.group1.four,
      disabled: colorGroups.group1.one,
      base: colorGroups.group1.one,
      accent: colorGroups.group1.two
    },
    tertiary: {
      hover: colorGroups.group5.four,
      disabled: colorGroups.group5.one,
      base: colorGroups.group5.one,
      accent: colorGroups.group5.two
    },
    background: colorGroups.group4.four,
    footer: colorGroups.group4.five,
    menu: colorGroups.group4.three,
    accent: colorGroups.group4.one
  },
  spacing,
  t,
  transition: 'all 0.5s ease'
};

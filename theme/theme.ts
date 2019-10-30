import { colorGroups } from './colors';
import { t, T } from './t';

export interface Theme {
  colors: Colors;
  spacing: Spacing;
  states: ColorStates;
  t: T;
}

export interface ColorGroup {
  lighter: string;
  light: string;
  base: string;
  dark: string;
  darker: string;
}

export interface ColorState {
  light: string;
  dark: string;
}

export interface Link {
  default: string;
  hover: string;
  active: string;
  visited: string;
}

export interface Button {
  default: string;
  hover: string;
  disabled: string;
  light: string;
}

export interface Buttons {
  primary: Button;
  secondary: Button;
  tertiary: Button;
}

export interface ColorStates {
  hover: ColorState;
  selected: ColorState;
  error: ColorState;
  warning: ColorState;
  default: ColorState;
  link: Link;
  buttons: Buttons;
}

export interface Colors {
  group1: ColorGroup;
  group2: ColorGroup;
  group3: ColorGroup;
  group4: ColorGroup;
  group5: ColorGroup;
  group6: ColorGroup;
  group7: ColorGroup;
  group8: ColorGroup;
  group9: ColorGroup;
  group10: ColorGroup;
  group11: ColorGroup;
  group12: ColorGroup;
  white: string;
  black: string;
}

export interface Spacing {
  xSmall: number;
  small: number;
  medium: number;
  large: number;
  xLarge: number;
  xxLarge: number;
}


const spacing: Spacing = {
  xSmall: 5,
  small: 10,
  medium: 15,
  large: 30,
  xLarge: 50,
  xxLarge: 100
};
export const theme: Theme = {
  colors: {
    ...colorGroups,
    white: '#fff',
    black: '#000'
  },
  states: {
    hover: {
      light: colorGroups.group7.light,
      dark: colorGroups.group7.base
    },
    selected: {
      light: colorGroups.group5.light,
      dark: colorGroups.group5.base
    },
    error: {
      light: colorGroups.group11.light,
      dark: colorGroups.group11.base
    },
    default: {
      light: colorGroups.group10.light,
      dark: colorGroups.group10.base
    },
    link: {
      default: colorGroups.group1.base,
      hover: colorGroups.group1.dark,
      active: colorGroups.group1.base,
      visited: colorGroups.group1.base
    },
    warning: {
      light: colorGroups.group8.lighter,
      dark: colorGroups.group8.base
    },
    buttons: {
      primary: {
        default: colorGroups.group2.base,
        hover: colorGroups.group2.dark,
        disabled: colorGroups.group2.lighter,
        light: colorGroups.group2.lighter
      },
      secondary: {
        default: colorGroups.group1.base,
        hover: colorGroups.group1.dark,
        disabled: colorGroups.group1.lighter,
        light: colorGroups.group1.lighter
      },
      tertiary: {
        default: colorGroups.group5.base,
        hover: colorGroups.group5.dark,
        disabled: colorGroups.group5.lighter,
        light: colorGroups.group5.lighter
      }
    }
  },
  spacing,
  t
};

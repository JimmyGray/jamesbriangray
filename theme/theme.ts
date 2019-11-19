import { colorGroups } from './colors';
import { t, T } from './t';

export interface Theme {
  colors: Colors;
  spacing: Spacing;
  t: T;
  transition: string;
}

export interface ColorGroup {
  lighter: string;
  light: string;
  base: string;
  dark: string;
  darker: string;
}

export interface MainStates extends ColorGroup {
  hover: string;
  disabled: string;
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
  primary: MainStates;
  secondary: MainStates;
  tertiary: MainStates;
  background: ColorGroup;
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

export interface MediaQueries {
  small: string;
  medium: string;
  large: string;
  xLarge: string;
}

export interface Breakpoints {
  small: number;
  medium: number;
  large: number;
  xLarge: number;
}

export const breakpoints: Breakpoints = {
  small: 600,
  medium: 900,
  large: 1200,
  xLarge: 1800
};

export const mq: MediaQueries = {
  small: `@media (min-width: ${ breakpoints.small }px)`,
  medium: `@media (min-width: ${ breakpoints.medium }px)`,
  large: `@media (min-width: ${ breakpoints.large }px)`,
  xLarge: `@media (min-width: ${ breakpoints.xLarge }px)`
};

export const theme: Theme = {
  colors: {
    ...colorGroups,
    primary: {
      base: colorGroups.group1.base,
      hover: colorGroups.group1.light,
      disabled: colorGroups.group1.lighter,
      light: colorGroups.group1.light,
      lighter: colorGroups.group1.lighter,
      dark: colorGroups.group1.dark,
      darker: colorGroups.group1.darker
    },
    secondary: {
      base: colorGroups.group1.base,
      hover: colorGroups.group1.dark,
      disabled: colorGroups.group1.lighter,
      light: colorGroups.group1.light,
      lighter: colorGroups.group1.lighter,
      dark: colorGroups.group1.dark,
      darker: colorGroups.group1.darker
    },
    tertiary: {
      base: colorGroups.group5.base,
      hover: colorGroups.group5.dark,
      disabled: colorGroups.group5.lighter,
      light: colorGroups.group5.light,
      lighter: colorGroups.group5.lighter,
      dark: colorGroups.group1.dark,
      darker: colorGroups.group1.darker
    },
    background: {
      lighter: colorGroups.group4.lighter,
      light: colorGroups.group4.light,
      base: colorGroups.group4.base,
      dark: colorGroups.group4.dark,
      darker: colorGroups.group4.darker
    },
    white: '#fff',
    black: '#000'
  },
  spacing,
  t,
  transition: 'all 0.5s ease'
};

import { colorGroups } from './colors';
import { t, T } from './t';

export interface Theme {
  colors: Colors;
  spacing: Spacing;
  states: ColorStates;
  main: Main;
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

export interface MainStates {
  default: string;
  hover: string;
  disabled: string;
  dark: string;
  darker: string;
  light: string;
  lighter: string;
}

export interface Main {
  primary: MainStates;
  secondary: MainStates;
  tertiary: MainStates;
}

export interface ColorStates {
  hover: ColorState;
  selected: ColorState;
  error: ColorState;
  warning: ColorState;
  default: ColorState;
  link: Link;
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
  background: string;
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
    white: '#fff',
    black: '#000',
    background: colorGroups.group10.darker
  },
  states: {
    hover: {
      light: colorGroups.group1.light,
      dark: colorGroups.group1.base
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
    }
  },
  main: {
    primary: {
      default: colorGroups.group1.base,
      hover: colorGroups.group1.dark,
      disabled: colorGroups.group1.lighter,
      light: colorGroups.group1.light,
      lighter: colorGroups.group1.lighter,
      dark: colorGroups.group1.dark,
      darker: colorGroups.group1.darker
    },
    secondary: {
      default: colorGroups.group1.base,
      hover: colorGroups.group1.dark,
      disabled: colorGroups.group1.lighter,
      light: colorGroups.group1.light,
      lighter: colorGroups.group1.lighter,
      dark: colorGroups.group1.dark,
      darker: colorGroups.group1.darker
    },
    tertiary: {
      default: colorGroups.group5.base,
      hover: colorGroups.group5.dark,
      disabled: colorGroups.group5.lighter,
      light: colorGroups.group5.light,
      lighter: colorGroups.group5.lighter,
      dark: colorGroups.group1.dark,
      darker: colorGroups.group1.darker
    }
  },
  spacing,
  t
};

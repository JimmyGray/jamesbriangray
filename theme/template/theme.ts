import { T } from './t';

export interface Theme {
  colors: Colors;
  spacing: Spacing;
  t: T;
  transition: string;
}

export interface ColorGroup {
  one: string;
  two: string;
  three: string;
  four: string;
  five: string;
}

export interface MainStates {
  hover: string;
  disabled: string;
  base: string;
  accent: string;
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
  background: string;
  footer: string;
  accent: string;
  menu: string;
}

export interface Spacing {
  xSmall: number;
  small: number;
  medium: number;
  large: number;
  xLarge: number;
  xxLarge: number;
}

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
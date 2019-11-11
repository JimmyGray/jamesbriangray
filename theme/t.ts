export interface Font {
  fontSize: string;
  letterSpacing: string;
}

export interface Weights {
  default: Object;
  light: Object;
  medium: Object;
  bold: Object;
}

export interface FontStyles {
  italic: Object;
  normal: Object;
}

export interface FontFamily {
 sfMono: string;
}

export interface T {
  t56: Font;
  t40: Font;
  t32: Font;
  t30: Font;
  t28: Font;
  t26: Font;
  t24: Font;
  t22: Font;
  t20: Font;
  t18: Font;
  t17: Font;
  t16: Font;
  t15: Font;
  t14: Font;
  t13: Font;
  t12: Font;
  t11: Font;
  t10: Font;
  t9: Font;
  t8: Font;
  weights: Weights;
  styles: FontStyles;
  fontFamily: FontFamily;
}

export const t: T = {
  t56: {
    fontSize: '5.6rem',
    letterSpacing: '-0.067rem'
  },
  t40: {
    fontSize: '4rem',
    letterSpacing: '-0.048rem'
  },
  t32: {
    fontSize: '3.2rem',
    letterSpacing: '-0.038rem'
  },
  t30: {
    fontSize: '3rem',
    letterSpacing: '-0.036rem'
  },
  t28: {
    fontSize: '2.8rem',
    letterSpacing: '-0.034rem'
  },
  t26: {
    fontSize: '2.4rem',
    letterSpacing: '-0.031rem'
  },
  t24: {
    fontSize: '2.4rem',
    letterSpacing: '-0.028rem'
  },
  t22: {
    fontSize: '2.2rem',
    letterSpacing: '-0.026rem'
  },
  t20: {
    fontSize: '2rem',
    letterSpacing: '-0.024rem'
  },
  t18: {
    fontSize: '1.8rem',
    letterSpacing: '-0.022rem'
  },
  t17: {
    fontSize: '1.7rem',
    letterSpacing: '-0.02rem'
  },
  t16: {
    fontSize: '1.6rem',
    letterSpacing: '-0.019rem'
  },
  t15: {
    fontSize: '1.5rem',
    letterSpacing: '-0.018rem'
  },
  t14: {
    fontSize: '1.4rem',
    letterSpacing: '-0.017rem'
  },
  t13: {
    fontSize: '1.3rem',
    letterSpacing: '-0.016rem'
  },
  t12: {
    fontSize: '1.2rem',
    letterSpacing: '-0.014rem'
  },
  t11: {
    fontSize: '1.1rem',
    letterSpacing: '-0.013rem'
  },
  t10: {
    fontSize: '1rem',
    letterSpacing: '-0.012rem'
  },
  t9: {
    fontSize: '0.9rem',
    letterSpacing: '-0.01rem'
  },
  t8: {
    fontSize: '0.8rem',
    letterSpacing: '-0.01rem'
  },
  weights: {
    default: {
      fontWeight: 400
    },
    light: {
      fontWeight: 300
    },
    medium: {
      fontWeight: 500
    },
    bold: {
      fontWeight: 'bold'
    }
  },
  styles: {
    italic: {
      fontStyle: 'italic'
    },
    normal: {
      fontStyle: 'normal'
    }
  },
  fontFamily: {
    sfMono: 'SF Mono'
  }
};

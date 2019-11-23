import { Transition } from 'react-transition-group';
import React from 'react';

const FADE_DURATION = 300;

const defaultStyle = {
  transition: `opacity ${FADE_DURATION}ms ease-in-out`,
  opacity: 0
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0, width: 0 },
  exited: { opacity: 0, width: 0 }
};

export const Fade = ({ in: inProp, children }) => (
    <Transition in={inProp} timeout={FADE_DURATION}>
      {state => (
          <div style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}>
            {children}
          </div>
      )}
    </Transition>
);
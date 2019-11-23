import { useEffect, useState } from 'react';

export const isNavVisible = () => {
  let [pos, setPos] = useState();
  let [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      let offset = window.pageYOffset;
      setVisible(pos > offset);
      setPos(offset);
    };
    window.addEventListener('scroll', handleScroll);
    return (() => {
      window.removeEventListener('scroll', handleScroll);
    });
  });
  return { visible, pos };
};

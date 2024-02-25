import { ThemePropsWithColorTheme } from '@danji/styled';
import { getColorByType } from '../Button/button.utils';
import { Type } from '../Button/button.types';

const variants = {
  solid: ({ type, switcher: s }: ThemePropsWithColorTheme) => {
    const c = getColorByType(type as Type);

    return {
      color: 'text.primary',
      bg: s(`${c}.500`, `${c}.300`),
      '&:hover': {
        bg: s(`${c}.600`, `${c}.400`),
      },
      '&:active': {
        bg: s(`${c}.700`, `${c}.500`),
      },
    };
  },
};

const sizes = {
  sm: {
    minW: 80,
    h: 40,
    w: 80,
    padding: 5,
  },
  md: {
    minW: 150,
    h: 45,
    w: 150,
    padding: 7,
  },
  lg: {
    minW: 200,
    h: 55,
    w: 200,
    padding: 10,
  },
};

const baseStyles = {
  borderRadius: '0.325rem',
  cursor: 'pointer',
  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
};

export const buttonTheme = {
  variants,
  sizes,
  baseStyles,
};

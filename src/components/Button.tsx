import {Icon} from './Icon';

import '../styles/button.scss';
import {ButtonHTMLAttributes, memo} from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  iconName: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  selected: boolean;
}

export const Button = memo(
  ({
     iconName,
     title,
     selected,
     ...rest
   }: ButtonProps) => {
    return (
      <button
        type="button" {...(selected && {className: 'selected'})} {...rest}>
        <Icon name={iconName} color={selected ? '#FAE800' : '#FBFBFB'}/>
        {title}
      </button>
    );
  },
  (prevProps, nextProps) =>
    Object.is(prevProps.selected, nextProps.selected)
);
import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mcm401_32x32_4 from '../../png/Mcm401_32x32_4.png';

export const mcm401Data = {
  '32x32_4': {
    imageSrc: Mcm401_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Mcm401Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Mcm401: React.FC<Mcm401Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mcm401Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};

import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Progman42_32x32_1 from '../../png/Progman42_32x32_1.png';
import Progman42_32x32_4 from '../../png/Progman42_32x32_4.png';

export const progman42Data = {
  '32x32_1': {
    imageSrc: Progman42_32x32_1 as string,
    width: 32,
    height: 32,
  },

  '32x32_4': {
    imageSrc: Progman42_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Progman42Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_1' | '32x32_4';
}

export const Progman42: React.FC<Progman42Props> = ({
  variant = '32x32_1',
  ...rest
}) => {
  const image = progman42Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};

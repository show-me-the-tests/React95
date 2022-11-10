import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Mshtml32548_32x32_4 from '../../png/Mshtml32548_32x32_4.png';
import Mshtml32548_16x16_4 from '../../png/Mshtml32548_16x16_4.png';

export const mshtml32548Data = {
  '32x32_4': {
    imageSrc: Mshtml32548_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: Mshtml32548_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface Mshtml32548Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const Mshtml32548: React.FC<Mshtml32548Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = mshtml32548Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};

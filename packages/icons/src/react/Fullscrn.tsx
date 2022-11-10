import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Fullscrn_16x16_4 from '../../png/Fullscrn_16x16_4.png';

export const fullscrnData = {
  '16x16_4': {
    imageSrc: Fullscrn_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface FullscrnProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '16x16_4';
}

export const Fullscrn: React.FC<FullscrnProps> = ({
  variant = '16x16_4',
  ...rest
}) => {
  const image = fullscrnData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};

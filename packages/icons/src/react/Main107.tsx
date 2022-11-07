import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import Main107_32x32_4 from '../../png/Main107_32x32_4.png';

export const main107Data = {
  '32x32_4': {
    imageSrc: Main107_32x32_4 as string,
    width: 32,
    height: 32,
  },
};

export interface Main107Props extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4';
}

export const Main107: React.FC<Main107Props> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = main107Data[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};

import React from 'react';
import { IconProps } from '../iconType';
import { BaseIcon } from '../internal';
import FolderShared_32x32_4 from '../../png/FolderShared_32x32_4.png';
import FolderShared_16x16_4 from '../../png/FolderShared_16x16_4.png';

export const folderSharedData = {
  '32x32_4': {
    imageSrc: FolderShared_32x32_4 as string,
    width: 32,
    height: 32,
  },

  '16x16_4': {
    imageSrc: FolderShared_16x16_4 as string,
    width: 16,
    height: 16,
  },
};

export interface FolderSharedProps extends IconProps {
  /**
   * Icon variant to use.
   * also provides default styling with the correct height and width
   **/
  variant?: '32x32_4' | '16x16_4';
}

export const FolderShared: React.FC<FolderSharedProps> = ({
  variant = '32x32_4',
  ...rest
}) => {
  const image = folderSharedData[variant];

  return (
    <BaseIcon
      width={image.width}
      height={image.height}
      src={image.imageSrc}
      {...rest}
    />
  );
};

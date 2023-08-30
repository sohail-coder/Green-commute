import React from 'react';

export interface ImageProps {
  imageSource: string;
  imageWidth?: string;
  imageHeight?: string;
}
const Image = (props: ImageProps) => {
  const { imageSource, imageHeight, imageWidth } = props;
  return (
    <img
      src={imageSource}
      alt=""
      width={imageWidth}
      height={imageHeight}
      data-testid="image"
    ></img>
  );
};
export default Image;

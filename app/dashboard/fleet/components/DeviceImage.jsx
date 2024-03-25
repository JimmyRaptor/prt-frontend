import Image from 'next/image';
import { useState, useEffect } from 'react';

const DeviceImage = ({ device, type }) => {
  const defaultImageSrc = `/fleet/${type}_big.png`;
  const [imageSrc, setImageSrc] = useState(`/fleet/devices/${device.mod}.jpg`);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const response = await fetch(imageSrc);
        if (!response.ok) throw new Error('Image not found');
      } catch (error) {
        setImageSrc(defaultImageSrc);
      }
    };

    loadImage();
  }, [defaultImageSrc, device.mod, imageSrc]);

  return (
    <Image
      src={imageSrc}
      alt={device.mod || 'truck'}
      width={300}
      height={200}
      unoptimized={true}
      priority
      layout="responsive"
    />
  );
};

export default DeviceImage;
import Image from "next/image";
import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";

const DeviceImage = ({ device, type }) => {
  const defaultImageSrc = `/fleet/${type}_big.png`;
  const targetImageSrc = `/fleet/devices/${device.mod}.jpg`;
  const [imageSrc, setImageSrc] = useState(defaultImageSrc);

  useEffect(() => {
    const loadImage = async (src) => {
      try {
        const response = await fetch(src);
        if (response.ok) setImageSrc(src);
        if (!response.ok) throw new Error("Image not found");
      } catch (error) {}
    };

    loadImage(targetImageSrc);
  }, [targetImageSrc]);

  return (
    <Box position="relative" width="100%" height="250px" overflow="hidden">
      <Image
        src={imageSrc}
        alt={device.mod || "truck"}
        width={300}
        height={300}
        unoptimized={true}
        priority
        layout="fixed"
      />
    </Box>
  );
};

export default DeviceImage;

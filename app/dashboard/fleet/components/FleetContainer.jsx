import styles from "./FleetContainer.module.css";
import Image from 'next/image';

const FleetContainer = ({ imageSrc, children }) => {
  return (
    <div className={styles.flexContainer}>
      <div className={styles.imageContainer}>
      <Image 
          src={imageSrc} 
          alt="Left Side Image" 
          width={500} // 假定宽度，实际可以根据需要调整
          height={300} // 假定高度，实际可以根据需要调整
          layout="responsive" // 保持图像的宽高比
        />
      </div>
      <div className={styles.childrenContainer}>{children}</div>
    </div>
  );
};

export default FleetContainer;

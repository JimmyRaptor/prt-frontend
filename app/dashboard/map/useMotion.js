import { useState, useEffect, useRef } from 'react';

function useMotionForCoordinates(currentData, duration = 1000, frameRate = 15) {
  const [currentFrame, setCurrentFrame] = useState(currentData);
  const previousDataRef = useRef(currentData);
  const timerRef = useRef(null);
  const stepRef = useRef(0);
  const totalSteps = frameRate * (duration / 1000); // 计算总步数

  useEffect(() => {
    const updateFrame = () => {
      stepRef.current++;
      const t = stepRef.current / totalSteps;
      
      const nextFrame = currentData.map((current, index) => {
        const from = previousDataRef.current[index];
        
        // 检查from是否定义且包含latitude和longitude属性
        if (from && typeof from.latitude === 'number' && typeof from.longitude === 'number') {
          return {
            ...current,
            latitude: from.latitude + (current.latitude - from.latitude) * t,
            longitude: from.longitude + (current.longitude - from.longitude) * t,
          };
        } else {
          // 如果from未定义或不包含预期的属性，可以选择返回当前项或设置默认值
          return current; // 或者设置默认坐标值
        }
      });
      

      setCurrentFrame(nextFrame);

      if (stepRef.current < totalSteps) {
        timerRef.current = setTimeout(updateFrame, 1000 / frameRate);
      } else {
        clearTimeout(timerRef.current);
        stepRef.current = 0; // 重置步骤
      }
    };

    updateFrame(); // 启动动画

    return () => clearTimeout(timerRef.current); // 清理函数
  }, [currentData, frameRate, totalSteps]);

  useEffect(() => {
    previousDataRef.current = currentData;
  }, [currentData]);

  return currentFrame;
}

export default useMotionForCoordinates;


import { useState, useEffect, useRef } from 'react';

// 缓动函数，平滑动画的开始和结束
function easeInOutSine(t) {
  return -(Math.cos(Math.PI * t) - 1) / 2;
}

// 线性插值（Lerp）函数
function lerp(start, end, t) {
  return start + (end - start) * t;
}

function useMotionForCoordinates(currentData, duration = 1000) {
  const [currentFrame, setCurrentFrame] = useState([]);
  const previousDataRef = useRef(currentData);
  const startTimeRef = useRef(null);
  const animationFrameIdRef = useRef(null);

  useEffect(() => {
    if (!currentData || !currentData.length) return;

    const animate = (currentTime) => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime;
      }
      const elapsedTime = currentTime - startTimeRef.current;
      const t = Math.min(1, elapsedTime / duration);
      const easedT = easeInOutSine(t);

      const nextFrame = currentData.map((current, index) => {
        const from = previousDataRef.current[index] || current;
        return {
          latitude: lerp(from.latitude, current.latitude, easedT),
          longitude: lerp(from.longitude, current.longitude, easedT),
        };
      });

      setCurrentFrame(nextFrame);

      if (t < 1) {
        animationFrameIdRef.current = requestAnimationFrame(animate);
      }
    };

    animationFrameIdRef.current = requestAnimationFrame(animate);

    // 更新过去的数据为当前数据，为下一次更新做准备
    previousDataRef.current = currentData;

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [currentData, duration]);

  return currentFrame;
}

export default useMotionForCoordinates;

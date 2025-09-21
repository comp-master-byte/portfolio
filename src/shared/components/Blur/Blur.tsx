import { memo } from "react";
import styles from './Blur.module.css';

type BlurProps = {
  width?: number;
  height?: number;
  blur?: number;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

export const Blur = memo(function({
  blur,
  width,
  height,
  top,
  right,
  bottom,
  left
}: BlurProps) {
  return (
    <div 
      className={styles.blurWrapper}
      style={{
        filter: `blur(${blur}px)`,
        width,
        height,
        top,
        right,
        bottom,
        left
      }}
    ></div>
  )
})
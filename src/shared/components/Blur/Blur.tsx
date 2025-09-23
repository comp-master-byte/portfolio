import { memo } from "react";
import styles from './Blur.module.css';
import classNames from "classnames";

type BlurProps = {
  width?: number;
  height?: number;
  blur?: number;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  className?: string;
}

export const Blur = memo(function({
  blur,
  width,
  height,
  top,
  right,
  bottom,
  left,
  className
}: BlurProps) {
  return (
    <div 
      className={classNames(styles.blurWrapper, className)}
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
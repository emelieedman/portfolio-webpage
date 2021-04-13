import React, { useRef, useEffect, useState } from 'react';
import styles from './Canvas.module.css';
import img0001 from '../../assets/sequence/0001.png';

const Canvas = (props) => {
  const canvasRef = useRef(null);
  const html = document.documentElement;

  const currentFrame = (index) => {
    return `../../assets/sequence/${index.toString().padStart(4, '0')}.png`;
  };

  const img = new Image();
  img.src = currentFrame(1);
  console.log(img);

  //   console.log(currentFrame(1));

  //   const draw = (ctx, frameCount) => {
  //     ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  //     ctx.fillStyle = '#000000';
  //     ctx.beginPath();
  //     ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
  //     ctx.fill();
  //   };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    canvas.width = 2000;
    canvas.height = 1500;
    let frameCount = 15;

    // const updateImage = (index) => {
    //   img.src = currentFrame(index);
    //   context.drawImage(img, 0, 0);
    // };

    // let animationFrameId;

    //Our draw came here
    const render = () => {
      img.onload = () => {
        context.drawImage(img, 0, 0);
      };
      //   window.addEventListener('scroll', () => {
      //     const scrollTop = html.scrollTop;
      //     const maxScrollTop = html.scrollHeight - window.innerHeight;
      //     const scrollFraction = scrollTop / maxScrollTop;
      //     const frameIndex = Math.min(
      //       frameCount - 1,
      //       Math.ceil(scrollFraction * frameCount)
      //     );
      //     requestAnimationFrame(() => updateImage(frameIndex + 1));
      //   });
    };

    render();
  }, []);

  return (
    <>
      <canvas className={styles.canvas} ref={canvasRef} {...props} />
    </>
  );
};

export default Canvas;

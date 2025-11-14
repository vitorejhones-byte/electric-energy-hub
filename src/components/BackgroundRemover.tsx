import { useEffect, useState } from 'react';
import { pipeline, env } from '@huggingface/transformers';

// Configure transformers.js
env.allowLocalModels = false;
env.useBrowserCache = true;

const MAX_IMAGE_DIMENSION = 1024;

function resizeImageIfNeeded(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, image: HTMLImageElement) {
  let width = image.naturalWidth;
  let height = image.naturalHeight;

  if (width > MAX_IMAGE_DIMENSION || height > MAX_IMAGE_DIMENSION) {
    if (width > height) {
      height = Math.round((height * MAX_IMAGE_DIMENSION) / width);
      width = MAX_IMAGE_DIMENSION;
    } else {
      width = Math.round((width * MAX_IMAGE_DIMENSION) / height);
      height = MAX_IMAGE_DIMENSION;
    }
  }

  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(image, 0, 0, width, height);
  return { width, height };
}

interface BackgroundRemoverProps {
  src: string;
  alt: string;
  className?: string;
  position?: 'left' | 'right';
}

const BackgroundRemover = ({ src, alt, className = "", position = "left" }: BackgroundRemoverProps) => {
  const [processedImage, setProcessedImage] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    const removeBackground = async () => {
      try {
        const img = new Image();
        img.crossOrigin = "anonymous";
        img.src = src;
        
        await new Promise((resolve) => {
          img.onload = resolve;
        });

        const segmenter = await pipeline(
          'image-segmentation',
          'Xenova/segformer-b0-finetuned-ade-512-512',
          { device: 'webgpu' }
        );

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        resizeImageIfNeeded(canvas, ctx, img);
        const imageData = canvas.toDataURL('image/jpeg', 0.9);

        const result = await segmenter(imageData);
        
        if (!result || !Array.isArray(result) || result.length === 0) {
          setProcessedImage(src);
          setIsProcessing(false);
          return;
        }

        const outputCanvas = document.createElement('canvas');
        outputCanvas.width = canvas.width;
        outputCanvas.height = canvas.height;
        const outputCtx = outputCanvas.getContext('2d');
        if (!outputCtx) return;

        outputCtx.drawImage(canvas, 0, 0);
        const outputImageData = outputCtx.getImageData(0, 0, outputCanvas.width, outputCanvas.height);
        const data = outputImageData.data;

        // Apply mask
        for (let i = 0; i < result[0].mask.data.length; i++) {
          const alpha = Math.round((1 - result[0].mask.data[i]) * 255);
          data[i * 4 + 3] = alpha;
        }

        outputCtx.putImageData(outputImageData, 0, 0);
        const finalImage = outputCanvas.toDataURL('image/png', 1.0);
        
        setProcessedImage(finalImage);
        setIsProcessing(false);
      } catch (error) {
        console.error('Error removing background:', error);
        setProcessedImage(src);
        setIsProcessing(false);
      }
    };

    removeBackground();
  }, [src]);

  if (isProcessing) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <div className="animate-pulse">
          <div className="w-32 h-32 bg-primary/20 rounded-full" />
        </div>
      </div>
    );
  }

  return (
    <img
      src={processedImage}
      alt={alt}
      className={className}
    />
  );
};

export default BackgroundRemover;

import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

type OptimizedImageProps = Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'> & {
  src: string;
  alt: string;
  width: number;
  height: number;
  responsive?: boolean;
  priority?: boolean;
  className?: string;
};

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  responsive = true,
  priority = false,
  className = '',
  ...props
}: OptimizedImageProps) {
  // Check if the image is above the fold (hero images, etc.)
  const isAboveTheFold = priority;
  
  // Generate responsive sizes for different viewports
  const sizes = responsive 
    ? '(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 33vw'
    : `${width}px`;
  
  // For local images, we can use the built-in Next.js image optimization
  // For remote images, ensure they're properly configured in next.config.js
  const isLocalImage = !src.startsWith('http');
  
  return (
    <div 
      className={cn('relative', className)}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={isAboveTheFold}
        loading={isAboveTheFold ? 'eager' : 'lazy'}
        quality={85}
        className="object-cover w-full h-full"
        {...props}
      />
    </div>
  );
}

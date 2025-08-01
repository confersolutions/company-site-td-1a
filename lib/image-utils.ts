/**
 * Generates optimized image sources for different viewport sizes
 * @param basePath - Base path to the image without extension
 * @param extension - File extension (default: 'webp')
 * @returns Object containing srcSet and sizes for responsive images
 */
export function generateImageSources(
  basePath: string,
  extension: string = 'webp'
): { srcSet: string; sizes: string } {
  // Define standard widths for responsive images
  const widths = [320, 480, 640, 768, 1024, 1280, 1536, 1920];
  
  // Generate srcSet string
  const srcSet = widths
    .map((width) => {
      const isOriginal = width === 1920;
      const path = isOriginal 
        ? `${basePath}.${extension}`
        : `${basePath}-${width}w.${extension}`;
      return `${path} ${width}w`;
    })
    .join(', ');

  // Define responsive sizes
  const sizes = `
    (max-width: 640px) 90vw,
    (max-width: 1024px) 60vw,
    (max-width: 1280px) 40vw,
    30vw
  `.replace(/\s+/g, ' ').trim();

  return { srcSet, sizes };
}

/**
 * Extracts the base path from an image URL (removes file extension)
 * @param url - The image URL
 * @returns Base path without extension
 */
export function getBasePath(url: string): string {
  return url.replace(/\.[^/.]+$/, '');
}

/**
 * Checks if an image is above the fold
 * @param isHero - Whether the image is a hero image
 * @param isInViewport - Whether the image is in the viewport
 * @returns Boolean indicating if the image is above the fold
 */
export function isAboveTheFold(isHero: boolean = false, isInViewport: boolean = false): boolean {
  return isHero || isInViewport;
}

/**
 * Gets the appropriate loading strategy for an image
 * @param isAboveFold - Whether the image is above the fold
 * @returns 'eager' or 'lazy'
 */
export function getLoadingStrategy(isAboveFold: boolean): 'eager' | 'lazy' {
  return isAboveFold ? 'eager' : 'lazy';
}

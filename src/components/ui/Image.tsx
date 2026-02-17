import NextImage, { ImageProps as NextImageProps } from 'next/image'

import { cn } from '@/lib/utils'

export { NextImage }

interface ImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fill?: boolean
}

export function Image({ src, alt, width, height, className, priority = false, fill = false }: ImageProps) {
  const props: NextImageProps = {
    src,
    alt,
    quality: 85,
    placeholder: 'empty',
    priority,
    className: cn(className),
    ...(fill ? { fill: true } : { width, height }),
  }

  return <NextImage {...props} />
}

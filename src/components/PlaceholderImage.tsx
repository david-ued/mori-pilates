import Image from 'next/image';

/**
 * Branded placeholder for photos that will be delivered later.
 * Swap = drop the real photo into /public/images and change `src` here
 * (or overwrite the placeholder file with the same name).
 */
export function PlaceholderImage({
  src,
  alt,
  label,
  className = '',
  imgClassName = '',
  priority = false,
  sizes,
}: {
  src: string;
  alt: string;
  /** small caption shown on the placeholder, e.g. 影像準備中 */
  label?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes ?? '100vw'}
        className={`object-cover ${imgClassName}`}
      />
      {label ? (
        <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-cream/85 px-3 py-1 text-[11px] tracking-[0.16em] text-ink-soft backdrop-blur-sm">
          {label}
        </span>
      ) : null}
    </div>
  );
}

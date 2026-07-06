import { LINE_URL } from '@/lib/site';
import { LineIcon } from './LineIcon';

/**
 * Primary CTA — every booking/trial/contact action funnels to the official LINE account.
 */
export function LineButton({
  label,
  variant = 'solid',
  size = 'md',
  className = '',
}: {
  label: string;
  variant?: 'solid' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  const base =
    'group inline-flex items-center justify-center gap-2.5 font-medium tracking-wide transition-all duration-500 ease-out';
  const sizes = {
    sm: 'px-5 py-2 text-sm',
    md: 'px-7 py-3 text-sm md:text-base',
    lg: 'px-9 py-4 text-base md:text-lg',
  };
  const variants = {
    solid:
      'bg-mori text-cream shadow-[0_10px_30px_-12px_rgba(87,128,92,0.65)] hover:bg-mori-deep hover:shadow-[0_16px_38px_-12px_rgba(67,95,71,0.7)] hover:-translate-y-0.5',
    outline:
      'border border-mori/60 text-mori-deep hover:bg-mori hover:text-cream hover:border-mori hover:-translate-y-0.5',
    ghost: 'text-mori-deep underline-offset-8 hover:underline',
  };

  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      <LineIcon className="h-5 w-5 shrink-0 transition-transform duration-500 group-hover:scale-110" />
      <span>{label}</span>
    </a>
  );
}

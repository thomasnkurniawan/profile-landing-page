import { cn } from '../../utils/cn'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled,
  className,
  ...props
}) {
  return (
    <button
      disabled={disabled}
      className={cn(
        'rounded-lg font-medium transition focus:outline-none',
        size === 'sm' && 'px-3 py-1.5 text-sm',
        size === 'md' && 'px-4 py-2',
        size === 'lg' && 'px-5 py-3 text-lg',
        variant === 'primary' && 'bg-black text-white hover:bg-slate-800',
        variant === 'secondary' && 'bg-slate-200 hover:bg-slate-300',
        variant === 'danger' && 'bg-red-500 text-white hover:bg-red-600',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

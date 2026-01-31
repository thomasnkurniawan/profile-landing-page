import { cn } from '../../utils/cn'

export default function Badge({ children, variant = 'default' }) {
  return (
    <span
      className={cn(
        'inline-block rounded-full px-2 py-0.5 text-xs font-medium',
        variant === 'default' && 'bg-slate-200 text-slate-800',
        variant === 'success' && 'bg-green-100 text-green-700',
        variant === 'danger' && 'bg-red-100 text-red-700'
      )}
    >
      {children}
    </span>
  )
}

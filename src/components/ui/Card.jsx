import { cn } from '../../utils/cn'

export default function Card({ children, className }) {
  return (
    <div
      className={cn(
        'rounded-xl border bg-white p-4 shadow-sm',
        className
      )}
    >
      {children}
    </div>
  )
}

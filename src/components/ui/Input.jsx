import { cn } from '../../utils/cn'

export default function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        'w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black',
        className
      )}
      {...props}
    />
  )
}

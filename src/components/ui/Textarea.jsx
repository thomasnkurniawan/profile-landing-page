import { cn } from '../../utils/cn'

export default function Textarea({ className, ...props }) {
  return (
    <textarea
      className={cn(
        'w-full rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black',
        className
      )}
      {...props}
    />
  )
}

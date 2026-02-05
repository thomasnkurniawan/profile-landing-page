import { cn } from '../../utils/cn'

export default function Card({ children, className, background }) {
  return (
    <div
      className={cn(
        'rounded-xl border p-4 shadow-sm',
        className,
        background === 'white' && 'bg-white',
        background === 'black' && 'bg-black',
        background === 'slate' && 'bg-slate-50',
        background === 'gray' && 'bg-gray-50',
      )}
    >
      {children}
    </div>
  )
}

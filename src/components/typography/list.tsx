import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface TypographyListProps {
  items: ReactNode[]
  className?: string
}

export function TypographyList({ items, className }: TypographyListProps) {
    return (
      <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2 [&>li]:text-[#34322D]", className)}>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    )
  }
  
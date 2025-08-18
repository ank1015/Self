import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface TypographyTableProps {
  headers: ReactNode[]
  rows: ReactNode[][]
  className?: string
}

export function TypographyTable({ headers, rows, className }: TypographyTableProps) {
    return (
      <div className={cn("my-6 w-full overflow-y-auto", className)}>
        <table className="w-full">
          <thead>
            <tr className="even:bg-muted m-0 border-t p-0">
              {headers.map((header, index) => (
                <th key={index} className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="even:bg-muted m-0 border-t p-0">
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
  
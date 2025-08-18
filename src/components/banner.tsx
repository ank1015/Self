"use client"

import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

function Grid({
  cellSize = 12,
  strokeWidth = 1,
  patternOffset = [0, 0],
  className,
}: {
  cellSize?: number
  strokeWidth?: number
  patternOffset?: [number, number]
  className?: string
}) {
  const id = React.useId()

  return (
    <svg
      className={cn(
        "pointer-events-none absolute inset-0 text-black/10",
        className,
      )}
      width="100%"
      height="100%"
    >
      <defs>
        <pattern
          id={`grid-${id}`}
          x={patternOffset[0] - 1}
          y={patternOffset[1] - 1}
          width={cellSize}
          height={cellSize}
          patternUnits="userSpaceOnUse"
        >
          <path
            d={`M ${cellSize} 0 L 0 0 0 ${cellSize}`}
            fill="transparent"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
        </pattern>
      </defs>
      <rect fill={`url(#grid-${id})`} width="100%" height="100%" />
    </svg>
  )
}


export function Banner() {

    const [show, setShow] = React.useState(true)
    const router = useRouter()

    if(!show) return null;

  return (
    <div className="relative isolate flex  justify-between gap-3 overflow-hidden rounded-lg border border-green-600/15 bg-gradient-to-r from-lime-100/80 to-emerald-100/80 py-3 pl-4 pr-12 flex-row sm:items-center sm:py-2">
      <Grid
        cellSize={13}
        patternOffset={[0, -1]}
        className="text-black/30 mix-blend-overlay [mask-image:linear-gradient(to_right,black,transparent)] md:[mask-image:linear-gradient(to_right,black_60%,transparent)]"
      />

      <div className="flex items-center gap-3">

          {/* <div className="hidden rounded-full border border-green-600/50 bg-white/50 p-1 shadow-[inset_0_0_1px_1px_#fff] sm:block">
            <LinkIcon className="m-px h-4 w-4 text-green-800" />
          </div> */}
          {/* <Sparkles className="w-4 h-4 text-green-300" /> */}

        <p className="text-[12px] text-gray-900">
            I am looking for a full time role.
        </p>
      </div>

      <div className="flex items-center sm:-my-1">
         <button
          type="button"
          className="whitespace-nowrap rounded-md border border-green-700/50 px-2 py-[3px] cursor-pointer text-[12px] text-gray-800 transition-colors hover:bg-green-500/10"
          onClick={() => {router.push('/hire')}}
            >
            See If I&apos;m a Fit
          </button>
      </div>

      <button
        type="button"
        className="absolute inset-y-0 right-2.5 p-1 text-sm text-green-700 cursor-pointer underline transition-colors hover:text-green-900"
        onClick={() => {setShow(false)}}
      >
        <X className="h-[18px] w-[18px]" />
      </button>
    </div>
  )
}
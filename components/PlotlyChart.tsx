'use client'

import dynamic from 'next/dynamic'
import type { Config, Data, Layout } from 'plotly.js'
import type { CSSProperties } from 'react'

const Plot = dynamic(() => import('react-plotly.js'), { ssr: false })

type PlotlyChartProps = {
  data: Data[]
  layout?: Partial<Layout>
  config?: Partial<Config>
  className?: string
  style?: CSSProperties
}

export function PlotlyChart({
  data,
  layout,
  config,
  className,
  style
}: PlotlyChartProps) {
  return (
    <Plot
      data={data}
      layout={{ autosize: true, ...layout }}
      config={{ responsive: true, ...config }}
      style={{ width: '100%', minHeight: 360, ...style }}
      useResizeHandler
      className={className}
    />
  )
}

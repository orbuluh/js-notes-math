import type { MDXComponents } from 'nextra/mdx-components'
import { useMDXComponents as getDocsMDXComponents } from 'nextra-theme-docs'
import { PlotlyChart } from './components/PlotlyChart'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...getDocsMDXComponents(),
    PlotlyChart,
    ...components
  }
}

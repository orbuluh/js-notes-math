import type { Metadata } from 'next'
import { getPageMap } from 'nextra/page-map'
import { Layout } from 'nextra-theme-docs'
import 'nextra-theme-docs/style.css'
import 'katex/dist/katex.min.css'
import themeConfig from '../theme.config'

export const metadata: Metadata = {
  title: {
    default: 'Notes Template',
    template: '%s - Notes Template'
  },
  description: 'Nextra 4 notes template.'
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const pageMap = await getPageMap()

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Layout {...themeConfig} pageMap={pageMap}>
          {children}
        </Layout>
      </body>
    </html>
  )
}

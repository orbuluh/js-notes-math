import type { Metadata } from 'next'
import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents } from '../../mdx-components'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

type RouteParams = { mdxPath?: string[] }

export async function generateMetadata(props: {
  params: Promise<RouteParams>
}): Promise<Metadata> {
  const { mdxPath } = await props.params
  const { metadata } = await importPage(mdxPath)

  return metadata
}

const Wrapper =
  useMDXComponents({}).wrapper ??
  (({ children }: { children: React.ReactNode }) => <>{children}</>)

export default async function Page(props: {
  params: Promise<RouteParams>
  searchParams: Promise<Record<string, string | string[] | undefined>>
}) {
  const params = await props.params
  const { default: MDXContent, ...rest } = await importPage(params.mdxPath)

  return (
    <Wrapper {...rest}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}

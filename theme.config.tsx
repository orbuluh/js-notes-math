import { Search } from 'nextra/components'
import { Footer, LastUpdated, Navbar } from 'nextra-theme-docs'

const config = {
  navbar: (
    <Navbar
      logo={<span>Notes Template</span>}
      projectLink="https://github.com/orbuluh/notes-template"
    />
  ),
  search: <Search placeholder="Search notes..." />, 
  toc: {
    float: true,
    title: <>On This Page</>,
    backToTop: 'Back to top'
  },
  lastUpdated: <LastUpdated>Last updated on</LastUpdated>,
  docsRepositoryBase: 'https://github.com/orbuluh/notes-template/tree/main',
  feedback: {
    content: null
  },
  editLink: null,
  footer: <Footer>MIT 2026 © Notes Template.</Footer>
}

export default config

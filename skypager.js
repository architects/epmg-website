import website from './config/website'
import { camelCase } from 'skypager-util/lib/string'

export default (project) => {
  project.collections.register('content', {
    cwd: project.join('content')
  })
  
  project.collections.register('pages', {
    cwd: project.join('pages')
  })

  project.selectors.register('website/config', () => (chain) => (chain
    .plant(website(project))
    .result('getConfig')
  ))

  project.selectors.register('website/sitemap', () => (chain) => (chain
    .invoke('collections.lookup', 'pages')
    .invoke('routers.documents', ':name*')
    .map(r => r.path[1]) 
    .filter((doc) => !doc.id.match(/README/))
    .keyBy(doc => doc.variations.camel)
    .mapValues(cfg => createPageConfig(cfg))
    
  ))

  project.selectors.register('website', () => (chain) => chain
    .invoke('selectorMap', {
      config: 'website/config',
      sitemap: 'website/sitemap',
    }).merge({
      gitInfo: project.gitInfo,
      version: project.get('manifest.version'),
      cacheKey: project.cacheKey,
    }) 
  )

  return project
}

const createPageConfig = (sourceDocument) => {
  const page = sourceDocument.ready
  const settings = page.get('exportables.frontmatter', {})
  const route = page.get('exportables.frontmatter.route', `/${toId(page)}`) 
  
  return {
    route,
    metadata: {
      id: page.id, 
      cacheKey: page.cacheKey,
      ...page.metadata,
      ...settings,
    },
    output: {
      path: `${page.project.join(page.project.paths.output,toId(page))}`,
      filename: `index.html`,
    }
  }
} 

const toId = (doc) => doc.id.replace(/index$/,'')

const setupWebpackCompiler = (project) => {
  return project.compiler('web').configure((cfg) => (
    cfg.entry('')
  ))
}
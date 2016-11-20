const project = require('skypager/current')

const { print } = project.cli

print('Sitemap')

console.log(
  JSON.stringify(project.select('static-pages-map'), null, 2)
)

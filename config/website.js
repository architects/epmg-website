export default (project) => 
  project
    .configure('website')
    .feature('hosting', {
      host: 'epmg-website.skypager.io'
    })

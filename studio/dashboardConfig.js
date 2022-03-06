export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62241d4c57003fb6220bac3e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-njnodoab',
                  apiId: 'd1e68667-6722-4a03-8322-9b303653932a'
                },
                {
                  buildHookId: '62241d4dd9b8dfc9d6f074ed',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-nodcabh9',
                  apiId: '3a5899bf-6857-48a7-b6b9-7eb25617f8e3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Ebn-Omier/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-nodcabh9.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}

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
                  buildHookId: '5cdc56380a21cee46b7357a2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-dex2ux2r',
                  apiId: '47e031a5-db94-48a4-9c05-349f20da6394'
                },
                {
                  buildHookId: '5cdc563814feade4223ea615',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-xxjmpuec',
                  apiId: '441740ad-45d8-4538-beb2-1acf4212a395'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mihirtanksale/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-xxjmpuec.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}

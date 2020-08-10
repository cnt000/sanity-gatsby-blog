export default {
  widgets: [
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
                  buildHookId: '5f311a71bf54e98ea9719634',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-piq3s8fq',
                  apiId: 'b80d168b-8df8-49b0-9d85-44df22d266a1'
                },
                {
                  buildHookId: '5f311a71dc29ae7f5357cbf4',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-xnu5s8hm',
                  apiId: '3643efc7-cfd6-47a5-9fde-8172e648ac11'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cnt000/sanity-gatsby-blog',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-blog-web-xnu5s8hm.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

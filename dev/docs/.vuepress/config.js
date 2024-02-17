module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    base: '/vuepress/',
    themeConfig:{
        sidebarDepth: 0,
        nav:[
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
        ],
        sidebar:{
            '/guide/': [
                {
                    title: '這是元件', // Sidebar title
                    collapsable: false, // Whether the sidebar title is collapsible
                    children: [
                      //'',  Points to README.md or index.md
                      '/guide/basic/checkbox.md',
                      '/guide/basic/radiobutton.md',
                    ]
                },
                {
                    title: '這是複合元件', // Sidebar title
                    collapsable: false, // Whether the sidebar title is collapsible
                    children: [
                        '/guide/compo/checkAll.md',
                        '/guide/compo/checkLimit.md',
                        '/guide/compo/radioCombo.md',
                        '/guide/compo/radioSet.md'
                    ]
                }

            ],
        }


        
    }
  }
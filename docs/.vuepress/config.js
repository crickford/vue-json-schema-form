module.exports = {
  title: 'vue-json-schema-form',
  description: 'Generate forms from your JSON schemas! ✨',
  base: '/vue-json-schema-form/',
  themeConfig: {
    repo: 'crickford/vue-json-schema-form',
    editLinks: true,
    docsDir: 'docs',
    sidebarDepth: 2,
    sidebar: {
      '/guide/':[
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'getting-started',
            'examples'
          ]
        }
      ]
    }
  }
}

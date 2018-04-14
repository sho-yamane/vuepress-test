module.exports = {
  title: 'Hello VuePress!!!!',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Guide', link: '/guide/'},
      {text: 'External', link: 'https://google.com'},
    ],
    sidebar: {
      // sidebar for pages under /foo/
      '/foo/': [
        '',
        'one',
        'two'
      ],
      // sidebar for pages under /bar/
      '/bar/': [
        '',
        'three',
        'four'
      ]
    }
  }
}
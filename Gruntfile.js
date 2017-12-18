grunt.initConfig({
  wpt: {
    options: {
      locations: ['Tokyo', 'SanJose_IE9'],
      key: process.env.WPT_API_KEY
    },
    sideroad: {
      options: {
        url: [
          'http://sideroad.secret.jp/',
          'http://sideroad.secret.jp/articles/',
          'http://sideroad.secret.jp/plugins/'
        ]
      },
      dest: 'tmp/sideroad/'
    }
  }
});
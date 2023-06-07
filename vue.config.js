module.exports = {
  pages: {
    'home': {
      entry: './src/pages/Home/main.js',
      template: 'public/index.html',
      title: 'Home',
      chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
    },
    'about': {
      entry: './src/pages/About/main.js',
      template: 'public/index.html',
      title: 'About Us',
      chunks: [ 'chunk-vendors', 'chunk-common', 'about' ]
    },
    'learn': {
      entry: './src/pages/Learn/main.js',
      template: 'public/index.html',
      title: 'Learn',
      chunks: [ 'chunk-vendors', 'chunk-common', 'about' ]
    },
    'archive': {
      entry: './src/pages/Archive/main.js',
      template: 'public/index.html',
      title: 'Archive',
      chunks: [ 'chunk-vendors', 'chunk-common', 'about' ]
    }
  }
}

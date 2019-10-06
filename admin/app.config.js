const path = require('path')
const merge = require('deepmerge')
const nuxt = require('../nuxt.config.js')

const extend = {
  srcDir: __dirname,
  buildDir: '.nuxt/admin',

  build: {
    extend(config) {
      // so you may import components with `@`,
      // `import XXX from '@/components/...' in `admin/pages/xxx.vue`.
      config.resolve.alias['@'] = path.resolve(__dirname, '..')
    }
  }
}

export default merge(nuxt, extend)

const autoprefixer = require('autoprefixer')
const postcssNested = require('postcss-nested')
const atImport = require('postcss-import')
const postcssColorMod = require('postcss-color-mod-function')

const config = {
	plugins: [
		autoprefixer,
		postcssNested,
		atImport,
		postcssColorMod({ importFrom: './src/style/theme.css' })
	]
}

module.exports = config

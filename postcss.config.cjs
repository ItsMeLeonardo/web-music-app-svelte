const autoprefixer = require('autoprefixer');
const postcssNested = require('postcss-nested');

const config = {
	plugins: [autoprefixer, postcssNested]
};

module.exports = config;

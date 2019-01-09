const fs = require('fs');

function getPagesFromDir(componentDir) {
	const pagesObj = {};
	fs.readdirSync(componentDir).map(filename => {
		const componentName = filename.replace('.vue','');
		pagesObj[componentName] = { entry: componentDir + filename };
	});
	return pagesObj;
}

module.exports = {
	pages: getPagesFromDir('src/components/'),
    css: {
        extract: {filename: "css/[name].css"},
        modules: true,
        sourceMap: false,
        loaderOptions: {
            sass:{
                css: 'css-loader',
                'scss':'css-loader | sass-loader'
            }
        }
    },
}
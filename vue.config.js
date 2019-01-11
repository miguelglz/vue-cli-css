const fs = require('fs');
const path = require('path')

if(process.env.NODE_ENV === 'production') {
    function getPagesFromDir(baseDir, pagesObj = {}) {
    	fs.readdirSync(baseDir).forEach(childName => {
            if(fs.statSync(baseDir + childName).isDirectory()) {
                const newPath = baseDir + childName + '/'
                getPagesFromDir(newPath, pagesObj);
            } else {
                const fileExt = path.extname(childName);
                if(fileExt === '.vue') {
            		const componentName = childName.replace('.vue','');
            		pagesObj[componentName] = { entry: baseDir + childName };
                }
            }
    	});
    	return pagesObj;
    }

    module.exports = {
    	pages: getPagesFromDir('src/'),
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
}
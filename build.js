const Metro = require('metro');
Metro.loadConfig().then(async config => {
    Metro.runBuild(config, {
        entry: './src/entry.js',
        out: './dist/entry.js'
    });
});
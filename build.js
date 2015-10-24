var Metalsmith = require('metalsmith'),
    serve = require('metalsmith-serve'),
    markdown = require('metalsmith-markdown'),
    permalinks = require('metalsmith-permalinks'),
    layouts = require('metalsmith-layouts'),
    assets = require('metalsmith-assets');

Metalsmith(__dirname)
  .use(markdown({}))
  .use(layouts({ engine: 'handlebars' }))
  .use(permalinks(':permalink'))
  .use(assets({
     source: 'assets',
     destination: 'assets'
  }))
  .use(serve({})).build(function(err) {
    if (err) throw err;
  });

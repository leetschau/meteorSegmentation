Package.describe({
  name: 'leechau:segmentation',
  version: '0.1.1',
  // Brief, one-line summary of the package.
  summary: 'for chinese segmentation',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/leetschau/meteorSegmentation',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('underscore', 'server');
  api.addFiles('segmentation.js', 'server');
  api.export(['Seg'], 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('leechau:segmentation');
  api.use('underscore', 'server');
  api.addFiles('test-stubs.js', 'server');
  api.addFiles('segmentation-tests.js', 'server');
});

Package.describe({
  name: 'awei01:mongo-test-utils',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Meteor testing utility that allows you to reset collections for unit testing.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/awei01/meteor-mongo-test-utils',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('mongo');
  api.imply('mongo');
  api.addFiles('utils.js');
  api.export('MongoTestUtils', ['server', 'client'], { testOnly: true });
});

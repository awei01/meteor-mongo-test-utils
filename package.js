Package.describe({
  name: 'awei01:mongo-test-utils',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Meteor testing utility that allows you to reset collections for unit testing.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/awei01/meteor-mongo-test-utils',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',

  // can't set debugOnly to true because sanjo:jasmine ignores it otherwise
  // debugOnly: true,
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.addFiles('utils.js');
  api.export('MongoTestUtils');
});

Package.describe({
    name: 'planifica:node-rsa',
    version: '0.2.23',
    // Brief, one-line summary of the package.
    summary: 'Browserified Node.js RSA library carefully packed for Meteor',
    // URL to the Git repository containing the source code for this package.
    git: '',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: null //'README.md'
});

Npm.depends({'node-rsa': '0.2.23'});

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.2');
    api.use(['cosmos:browserify@0.1.3'], 'client');
    api.addFiles('browserify.js', 'client');

    api.export('RSA', 'client');
});

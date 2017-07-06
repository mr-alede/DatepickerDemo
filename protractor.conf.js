// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/docs/referenceConf.js
var path = require('path');
var downloadloc = path.join(__dirname, 'e2e\\downloads');

// https://github.com/angular/protractor/blob/master/lib/config.ts

/*global jasmine */
const { SpecReporter } = require('jasmine-spec-reporter');
var jasmineReporters = require('jasmine-reporters');

exports.config = {
  allScriptsTimeout: 60000,
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 60000,
    print: function () { }
  },
  useAllAngular2AppRoots: true,
  beforeLaunch: function () {
    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
  },
  onPrepare: function () {
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));

    jasmine.getEnv().addReporter(
      new jasmineReporters.NUnitXmlReporter({ savePath: 'C:\\Users\\Public\\' }));
  },
  capabilities: {
    'browserName': 'chrome',
    'platform': 'ANY',
    'version': 'ANY',
    'chromeOptions': {
      // Get rid of --ignore-certificate yellow warning
      args: ['--no-sandbox', '--test-type=browser'],
      // Set download path and avoid prompting for download even though
      // this is already the default on Chrome but for completeness
      prefs: {
        'download': {
          'prompt_for_download': false,
          'default_directory': downloadloc
        }
      }
    }
  },
  params: {
    basePath: __dirname
  }
};

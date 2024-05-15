const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: './cucumber-json-reports',
  reportPath: './cucumber-html-reports/multiple-cucumber-htmlreport.html',
  metadata: {
    browser: {
      name: 'chrome',
      version: '124'
    },
    device: 'Local test machine',
    platform: {
      name: 'ubuntu',
      version: '16.04'
    }
  },
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: 'Cypress with Cucumber and TypeScript' },
      { label: 'Release', value: '1.0' }
    ]
  }
});

# GRM Portal

## Building the app

Portal is built with typescript language, angular framework and angular cli tools.
Follow these steps to install these dependencies:

1. Install [node.js and npm](https://nodejs.org/en/)
2. Install angular cli and typescript
3. Enable Progress NPM registry on your machine as described here: http://docs.telerik.com/kendo-ui/intro/installation/npm#kendo-ui-professional
```
npm i -g typescript 
npm i -g angular-cli
npm login --registry=https://registry.npm.telerik.com/ --scope=@progress
```

To build the app in development mode install npm modules at first:
```
npm install
```

Then run build with: 
```
ng build
```
or 
```
ng serve
``` 
to run development server with live reloading.

To build the app in production mode with bundles run
```
ng build --prod
```
or 
```
ng serve --prod
```

## Migrating to Angular CLI RC1.0/Angular4.1
1. Make sure you have Node 6.9.0 or higher installed
2. Global package
npm uninstall -g angular-cli @angular/cli
npm cache clean
npm install -g @angular/cli@latest
3. Local project package
rmdir /s /q node_modules dist
npm install


## Development
Make sure that your editor settings configured according to project .editorconfig file 

Every new feature or bug fix should be covered with end to end tests.
We use angular cli default workflow with protractor and jasmine for tests.
To run the tests you'll need to setup and initialize protractor and selenium webdriver:
```
ng i -g protractor
webdriver-manager update
```

to run all of the tests locally:
```
ng e2e
```

Please don't forget to run 
```
ng lint
``` 
and fix all lint errors before submitting pull request

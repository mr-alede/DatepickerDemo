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

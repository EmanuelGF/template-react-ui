![Website](https://img.shields.io/website?down_color=gray&down_message=dead&up_color=green&up_message=online&url=https%3A%2F%2Femanuelgf.github.io%2Ftemplate-react-ui%2F%23%2F)

# Quickstart React template for website projects

> Lots of common website project features added on top of create-react-app to save you time.
> It´s intended to provide a simple quickstart configuration on top of create-react-app so to get you over the common project setup that is normally implemented on most projects.
> Use it for all your needs. Make some contributions, We are beginner friendly ✌👍 (Do Reach out to me if you need further explanation on the project structure.) 

## Preview

![preview about](https://api.emanuel-dev.com/uploads/preview2_9936057288.png)
===============================
![preview home](https://api.emanuel-dev.com/uploads/preview1_10cb02892b.png)

## Deployment
You can check out the deployed template on this [Link](https://emanuelgf.github.io/template-react-ui) 🚀

## Added features:
* Folder structure
* React context
* Routing
* reseted css
* basic cookie consent
* Layout ready
* react-bootstrap 
* Icons with fontawesome-free
* sass ready
* Standard "404 - page not found" for broken or dead link.
* End to end testing with [Cypress.io](https://www.cypress.io/) 

## Modules:
* axios
* react-router-dom
* react-lazy-load-images
* react-markdown
* react-cookie-consent
* react-bootstrap bootstrap
* @fortawesome/fontawesome-free
* node-sass
* cypress

### Folder Structure 
Folder structure on root directory:

```
.
+-- _cypress
|   +-- _integration
|       +-- sometest.spec.js
+-- _src
|   +-- _Components
|       +-- _ComponentA
|           +-- componenta.js
|           +-- componenta.scss
|   +-- _Context
|       +-- ctx.js
|   +-- _Helpers
|       +-- helpers.js
|   +-- _Images
|       +-- img1.jpg
|       +-- img2.jpg
|   +-- _Layouts
|       +-- _Layout1
|           +-- Layout1.js
|       +-- _Layout2
|           +-- Layout2.js
+-- _pages
|   +-- _SomePage
|       +-- SomePage.js
|       +-- SomePage.scss

```

### React context
- Used to pass data common to all componentes.
ex: change the theme, language translation. 

### Some other things to keep in mind:
- You can use react-lazy-load-image-component to lazy load images and add effects.
- Cookie consent ready with react-cookie-consent. 
- The project is fetching dummy data from [jsonplaceholder.typicode](https://jsonplaceholder.typicode.com)

## Using this template
1. Fork it!
2. Clone your fork to your local machine.
3. npm install the dependencies `<npm install >`
4. Run the project `<npm start>`
***

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run test`

Runs the tests which have been written in the cypress folder.\
Cypress automatically opens an interactive interface in your browser\
where you can get more details about the test that are currently running.

The tests will rerun when changes are made to test files

***

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

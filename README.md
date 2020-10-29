# React Template
This is a template, for new React Projects @ Acto.  
More specifically, it is designed to be a gradle submodule (it is however not a requirement).  
Pages for our standard [Fafnir](https://bitbucket.org/acto/fafnir-sso/src/default/) login flow are included.  

## Included in the template
* React  
* React-Router  
* Material UI  
* [Acto Ajax](https://www.npmjs.com/package/@acto/ajax)  
* A series of often-used components and hooks
* [Formik](https://github.com/jaredpalmer/formik) + [Yup](https://github.com/jquense/yup), for non rage inducing form handling
* Webpack v5 setup, which allows HMR and [code-splitting using dynamic imports](https://reactjs.org/docs/code-splitting.html#reactlazy)  
* [Cypress](https://www.cypress.io/) testing suite  
* [Eslint](https://eslint.org/), with the [StandardJS](https://standardjs.com/) styleguide
* Nginx config, including a dummy reverse-proxy for your API  
* Dockerfile, for building your webserver, containing your react build  

## Prerequisites
* Node >= v14  
* Yarn  
* Chrome browser  
* Docker  

## Usage
1. Clone the repo, and copy the contents to your desired location
2. Edit the `config/settings.js` file, to match your projects requirements and needs
3. Run `yarn`
4. Start working

###### This template will be updated continuously, as tools are updated and best practices change.

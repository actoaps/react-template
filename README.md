# React Project Template
This is a template, for new React Projects @ Acto.  
More specifically, it is designed to be a gradle submodule (it is however not a requirement).

## Included in the template
* React v16.4  
* Material UI v1.4.0  
* [Formik](https://github.com/jaredpalmer/formik) + [Yup](https://github.com/jquense/yup), for non rage inducing form handling
* Webpack v4 setup, which allows HMR and [code-splitting using dynamic imports](https://github.com/jamiebuilds/react-loadable)  
* [Cypress](https://www.cypress.io/) testing suite  
* [Eslint](https://eslint.org/), with a version of the [StandardJS](https://standardjs.com/) styleguide, using 4 spaces
* Nginx config, including a dummy reverse-proxy for your API  
* Dockerfile, for building your webserver, containing your react build  

## Prerequisites
* Node >= v8.11  
* Yarn  
* Chrome browser  
* Docker  

## Usage
1. Clone the repo, and copy the contents to your desired location
2. Edit the `config/settings.js` file, to match your projects requirements and needs
3. Run `yarn`
4. Start working

###### This template will be updated continuously, as tools are updated and best practices change.

# Single-spa React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) with the help of [single-spa](https://single-spa.js.org/). React version used is `17.0.2`.

> A **single-spa parcel** is essentially a reusable component within the Single-SPA framework that allows you to share UI elements across different frameworks within a single application, **similar to how a web component functions**, but with the added functionality of lifecycle management and **framework-agnostic mounting** provided by Single-SPA; essentially, a **parcel is a Single-SPA specific implementation of a web component**, designed to seamlessly integrate components built with different frameworks into a single page application

## Overview

This repo is used in conjunction with four other repos listed below. Together they make up an application composed of microfrontends. Each app can be updated and deployed independently from the others.

- [**Root Config**](https://github.com/actionanand/single-spa-demo-root-config)
- [**Angular App**](https://github.com/actionanand/single-spa-angular)
- [**React App**](https://github.com/actionanand/single-spa-react)
- [**Vue App**](https://github.com/actionanand/single-spa-vue)
- [**Svelte App**](https://github.com/actionanand/single-spa-svelte)
- [**React App Parcel** (This Repo)](https://github.com/actionanand/react-parcel-app)

## Demo

You can find the demo here: 

## How to run this repo locally

```bash
yarn start
```

## How to build for production

```bash
yarn build:webpack
```

## How to create single-spa frontend app

```bash
npx create-single-spa
```

## How to clone

```sh
npx degit github:actionanand/react-parcel-app#1-skeleton sspa-react
```

## How to serve raw github content as CDN

```
https://cdn.jsdelivr.net/gh/<github-username>/<github-repo-name@branch-name>/<filename>
```

## How It Works

This project uses [single-spa](https://single-spa.js.org/) to architect an app composed of `micro-frontends`. In the root config, the four microfrontend apps (angular, react, vue, and svelte) are registered with singe-spa. The main `index.ejs` file contains an import map, which references where to find the compiled JavaScript bundle for each microfrontend. [SystemJS](https://github.com/systemjs/systemjs) is the module loader which then loads the bundles when needed.


### NB

Each repo can be set up with [Travis CI](https://travis-ci.org/) for running jobs as part of a continuous integration pipeline. When new code is pushed to the master branch for any of the repos, the new code is compiled and then uploaded to AWS S3, which serves as a CDN. The CI job also updates the import map file to reference the new bundle for the updated project.

### Sources

- [How to Develop and Deploy Micro-Frontends with Single-SPA](https://www.freecodecamp.org/news/developing-and-deploying-micro-frontends-with-single-spa/)
- [Fun with Micro-frontend in a single-spa way](https://dev.to/nitinreddy3/fun-with-micro-frontend-in-a-single-spa-way-1iok)
- [Connect Micro frontends with the Single-Spa framework. Step by step guide.](https://obaranovskyi.medium.com/connecting-micro-frontends-with-the-single-spa-framework-step-by-step-guide-e7fa87306bc7)
- [RawGit](https://rawgit.com/)
- [Raw Github js file not loading (direct link) like CDN - stackoverflow](https://stackoverflow.com/questions/62901066/raw-github-js-file-not-loading-direct-link-like-cdn/)
- [How to deploy a React, Angular and Vue project to Github pages](https://deepinder.me/how-to-deploy-a-react-angular-vue-project-to-github-pages)
# Contributing to UI Fragments

Thanks for your interest in contributing to UI Fragments! Please take a moment to review this document before submitting a pull request.

## Setup the Project

The following steps will get you up and running to contribute to UI Fragments:

1. Fork the repo (click the <kbd>Fork</kbd> button at the top right of
   [this page](https://github.com/luigircruz/ui-fragments))

2. Clone your fork locally
```sh
git clone https://github.com/<your_github_username>/ui-fragments.git

cd ui-fragments
```

3. Setup all the dependencies and packages by running `yarn`. If you don't have yarn on your machine, you can easily install it by running `npm install -g yarn`. You can learn more about yarn [here](https://yarnpkg.com/getting-started/install)

## Tooling

- [Storybook](https://storybook.js.org/) for rapid UI component development and
  testing
- [Testing Library](https://testing-library.com/) for testing components and
  hooks

## Pull requests

**Please ask first before starting work on any significant new features.**

It's never a fun experience to have your pull request declined after investing a lot of time and effort into a new feature. To avoid this from happening, we request that contributors create [an issue](https://github.com/luigircruz/ui-fragments/issues) to first discuss any significant new features. This includes things like adding new components, updating styles, etc.

## Coding standards

Our code formatting rules are defined in [prettier.config.js](https://github.com/luigircruz/ui-fragments/blob/main/prettier.config.js). You can format your code easily by running this command:

```sh
# NPM
npm run format

# Yarn
yarn format
```

## Running tests

You can run the test suite using the following commands:

```sh
# NPM
npm test

# Yarn
yarn test
```

Please ensure that the tests are passing when submitting a pull request. If you're adding new components to UI Fragments, please include tests.

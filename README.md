# react-wonderpush

This service lets you integrate Wonderpush in your React applications easily.
- [Official website](https://wonderpush.com)

## Features

## Installation and Quick Start

### 1- Installation:
You can install the module from a package manager of your choice directly from the command line

```sh
# Yarn
yarn add react-wonderpush

# NPM
npm i react-wonderpush
```

Or alternatively, grab the dist/index.es5.min.js and include it in your project

In your application, declare the react-tag-commander module dependency.

```html
<script src="nodes_components/react-wonderpush/dist/index.es5.min.js"></script>
```
or if you are using es6, import it like so
```javascript
import wp from 'react-wonderpush';
```

### 2- In your application

```javascript
const wrapper = wp.getInstance();
```




### In React component


## Sample app
To help you with your implementaiton we provided a sample application. to run it
```bash
cd wonderpush-sample-app
yarn start
```
then go to [http://localhost:3000](http://localhost:3000)


## License

As React itself, this module is released under the permissive [MIT License](http://revolunet.mit-license.org). Your contributions are always welcome.

## Development

After forking you will need to run the following from a command line to get your environment setup:

1. ```yarn install```

After install you have the following commands available to you from a command line:

1. ```gulp```

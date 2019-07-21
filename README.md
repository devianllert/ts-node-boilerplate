# Node.js Typescript Boilerplate

![React](https://user-images.githubusercontent.com/12243763/40760176-7f92ceb8-6463-11e8-9c4b-f65907c613ae.png "Node")

[![dependencies Status](https://david-dm.org/devianllert/ts-node-boilerplate/status.svg)](https://david-dm.org/devianllert/ts-node-boilerplate) [![devDependencies Status](https://david-dm.org/devianllert/ts-node-boilerplate/dev-status.svg)](https://david-dm.org/devianllert/ts-node-boilerplate?type=dev) [![issue Status](https://img.shields.io/github/issues/devianllert/ts-node-boilerplate.svg)](https://github.com/devianllert/ts-node-boilerplate/issues)

## Quick start

1. Clone this repo using ```git clone https://github.com/devianllert/ts-node-boilerplate.git```
2. Move to the appropriate directory: ```cd ts-node-boilerplate```.
3. Run ```npm install``` to install dependencies.
4. Run ```npm run dev``` to see the example app at ```http://localhost:3000```.

## Documentation

### CLI Commands

#### Development

```bash
npm run dev
```

Starts the development server running on ```http://localhost:3000```

#### Building

```bash
npm run build
```

Preps your app for deployment (does not run tests). Optimizes and minifies all files, piping them to the dist folder.

#### Testing

```bash
npm run test
```

Tests your application with the unit tests specified in the ```**/*.{spec,test}.{js,ts}``` files throughout the application.

```bash
npm run test:watch
```

Tests your application in watch mode with the unit tests specified in the ```**/*.{spec,test}.{js,ts}``` files throughout the application.

#### Linting

```bash
npm run lint
```

Lints your JavaScript.

```bash
npm run lint:fix
```

Lints your code and tries to fix any errors it finds.

#### Docker

##### Build

```bash
docker build -t ts-node .
```

##### Run

```bash
docker run --rm -it -p 3000:3000 ts-node
```

## License

This project is licensed under the MIT license, Copyright (c) 2019 Ruslan Povolockii.
For more information see `LICENSE.md`.
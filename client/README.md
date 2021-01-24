# Getting Start
Runs the app in the development mode.\
[Open http://localhost:3000](http://localhost:3000)

```shell
yarn start
```

## Run all tests:

#### Before tests have to start server on express

```shell
npm start
cd ../server/
npm start
```

### Available tests:

```shell
npm run test-react-scripts
npm run test-mocha
npm run test
npm run test:coverage
npm run test-playwright

npm run cypress:test --video
#or
npm run cypress:test
```

for open cypress browser: `npm run cypress:open`

Build Application for deploying

```shell
yarn build
```
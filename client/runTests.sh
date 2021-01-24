#!/bin/zsh

# press q after tests: "test-react-scripts"
npm run test-react-scripts
npm run test-mocha
npm run test
npm run test:coverage

# press crt+c after tests: "test-playwright"
npm run test-playwright

npm run cypress:test --video
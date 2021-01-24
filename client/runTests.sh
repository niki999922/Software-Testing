#!/bin/zsh

# press q after tests: "test-react-scripts"
npm run test-react-scripts
npm run test-mocha
npm run test
npm run test:coverage
npm run test-playwright
npm run cypress:test --video
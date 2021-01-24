module.exports = {
    testEnvironment: 'node',
    collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}'],
    testMatch: ['**/test/**/?(*.)*(spec|test).[jt]s?(x)'],
    moduleNameMapper: {
        "\\.(css|sass)$": "identity-obj-proxy",
    }
};
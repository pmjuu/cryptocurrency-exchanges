const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
    "^.+\\.css$": "jest-transform-stub",
  },
  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy",
  },
};

module.exports = createJestConfig(customJestConfig);

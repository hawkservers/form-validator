/* global module */

module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "testMatch": [
    "**/Tests/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  }
}

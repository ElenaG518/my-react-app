module.exports = {
    transform: {
      "^.+\\.jsx?$": "babel-jest"
    },
    testTimeout: 15000,
    "resetMocks": false,
    "setupFilesAfterEnv": ["./setupJest.js"]
  };
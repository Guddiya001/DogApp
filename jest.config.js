module.exports = {
    // ...
    setupFilesAfterEnv: [
      "@testing-library/react/cleanup-after-each",
      "@testing-library/jest-dom/extend-expect"
    ],
    moduleNameMapper: {
      'axios': './lib/axios.js'
    },
  };
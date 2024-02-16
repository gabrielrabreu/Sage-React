module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/global.jest.d.ts"],
  moduleNameMapper: {
    ".(css|less|scss)$": "identity-obj-proxy",
  },
};

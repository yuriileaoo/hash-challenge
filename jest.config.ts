/* eslint-disable import/no-extraneous-dependencies */
import { pathsToModuleNameMapper } from "ts-jest/utils";

export default {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: pathsToModuleNameMapper(
    {
      "@modules/*": ["/modules/*"],
      "@infra/*": ["/infra/*"],
      "@lib/*": ["/lib/*"],
      "@configs/*": ["/configs/*"],
      "@test/*": ["/test/*"],
    },
    { prefix: "<rootDir>/src" }
  ),
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 75,
      statements: 75,
    },
  },
  bail: true,
  clearMocks: true,
  collectCoverageFrom: [
    "<rootDir>/src/modules/**/services/*.ts",
    "<rootDir>/src/lib/adapters/implementations/*.ts",
    "<rootDir>/src/lib/utils/*.ts",
  ],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageReporters: ["text", "lcov", "clover"],
  setupFiles: ["./jest-setup-file.ts"],
  testMatch: ["**/*.spec.ts"],
  // setupFiles: ["dotenv/config", "reflect-metadata"],
};

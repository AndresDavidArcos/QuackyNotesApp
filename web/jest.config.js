const config = {
  coverageReporters: ['lcov', 'clover'],
  reporters: [
    "default",
    [
      "jest-junit",
      {
        outputDirectory: "reporter",
        outputName: "test-report.xml",
      },
    ],
  ],
};

module.exports = config;

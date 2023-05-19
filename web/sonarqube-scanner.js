const scanner = require("sonarqube-scanner");
scanner(
  {
    serverUrl: "http://localhost:9000",
    options: {
      "sonar.login": "admin",
      "sonar.password": "xtiOmmD0e",
      "sonar.projectName": "react_app",
      "sonar.projectDescription": "Just for demo...",
      "sonar.sourceEncoding": "UTF-8",
      "sonar.sources": "./src",
      "sonar.test.inclusions": "**/*.test.js",
      "sonar.exclusions": "**/node_modules/**",
      "sonar.tests": "./src/__test__",
      "sonar.testExecutionReportPaths": "test-report.xml",
      "sonar.javascript.lcov.reportPaths": "coverage/lcov.info",
    },
  },
  () => process.exit()
);

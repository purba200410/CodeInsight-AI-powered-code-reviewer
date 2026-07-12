const { ESLint } = require("eslint");

const eslint = new ESLint({
  overrideConfig: {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        console: "readonly",
      },
    },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
    },
  },
  overrideConfigFile: true,
});

async function analyzeJavaScript(code) {
  const results = await eslint.lintText(code);

  return results[0].messages.map((msg) => ({
    rule: msg.ruleId,
    severity: msg.severity === 2 ? "HIGH" : "LOW",
    message: msg.message,
    line: msg.line,
    column: msg.column,
  }));
}

module.exports = {
  analyzeJavaScript,
};
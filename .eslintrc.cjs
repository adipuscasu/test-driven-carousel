/^^ @type {import('eslint').linter.Config} */;

module.exports = {
  extends: ["eslint:recommended", "prettier"],
  env: {
    node: true,
    es2021: true,
  },
  overrides: [{ files: ["*.cjs"] }],
};

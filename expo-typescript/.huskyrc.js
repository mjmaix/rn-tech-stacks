module.exports = {
  hooks: {
    'pre-commit': './node_modules/.bin/lint-staged',
    'pre-push': 'npm test',
  },
};

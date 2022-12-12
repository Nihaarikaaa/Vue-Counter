module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': 'vue-jest'
  },
  verbose: true,

  testResultsProcessor: './node_modules/jest-junit-reporter'
}

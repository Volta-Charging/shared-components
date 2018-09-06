module.exports = {
  extends: [
    "eslint-config-volta",
    "eslint-config-volta/environment/react-native.js"
  ],
  plugins: [
    'react',
  ],
  parser: "babel-eslint",
  rules: {
    // there should not be any rules in here
  }
}

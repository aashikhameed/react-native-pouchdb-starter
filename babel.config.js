module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
          crypto: 'react-native-quick-crypto',
          stream: 'readable-stream',
          buffer: '@craftzdog/react-native-buffer',
        },
      },
    ],
  ],
};

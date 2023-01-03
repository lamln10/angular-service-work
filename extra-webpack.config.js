const path = require('path');
module.exports = {
  entry: {
    'bundle': './src/scripts/demo.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename:'[name].js'
  },
};

// WE HAVE TO: let webpack where the entry point is, where does the application kick off
// WE HAVE TO: where do we put our output file will be? the final bundle file, where do we put that?
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  }
}
// Transpile all code following this line with babel and use '@babel/preset-env' (aka ES6) preset.
require("@babel/register")({
    presets: ["@babel/preset-env"]
  });
  
  // Import the rest of our application.
  module.exports = require('./server.js');
  // module.exports = require('./logger.js');
  // module.exports = require('./app.js');
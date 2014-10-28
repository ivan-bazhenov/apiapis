module.exports = function(params) {
  var module = {};

  /*
  GET /help/ping
  Answers "pong" if server is available.
   */
  module.ping = function() {
//    todo:
  };

  /*
   GET /help/ping_dependencies
   Returns code 200 (OK) if all backend systems are available and 503 (Service not available) if any system could not be contacted.
   */
  module.ping_dependencies = function() {
//    todo:
  };

  /*
   GET /help/version
   Returns server version information and other metadata attributes.
   */
  module.version = function() {
//    todo:
  };

  return module;
};

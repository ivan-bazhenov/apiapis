// Ridiculously simple booking number generator
exports.flinogen = function(length, prefix) {
  var flino = prefix || '';
  var possible = "0123456789";

  for( var i=0; i < length; i++ )
    flino += possible.charAt(Math.floor(Math.random() * possible.length));

  return flino;
}

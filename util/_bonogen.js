exports.bonogen = function(length, prefix) {
  var bono = prefix || '';
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  for( var i=0; i < length; i++ )
    bono += possible.charAt(Math.floor(Math.random() * possible.length));

  return bono;
}

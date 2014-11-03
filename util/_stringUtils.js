// replacing of multiple couples code:value
exports.multireplace = function(srcStr, map) {
	for (code in map) {
		srcStr = srcStr.replace(code, map[code]);	
	}  
	return srcStr;
}

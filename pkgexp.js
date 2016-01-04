var
fs = require('fs'),
pkg = JSON.parse(fs.readFileSync('package.json')),
objectPath = require('object-path');

function pkgexp(path) {
	var root = path ? objectPath.get(pkg, path) : pkg;
	resolved = resolve(root);
	return resolved;
}

function resolve(root, node, resolveTree) {
	return root;
}

module.exports = pkgexp;
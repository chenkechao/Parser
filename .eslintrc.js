// eslint 检查配置
module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": ["eslint:recommended"],
    "globals": {
		"weex": "readonly",
		"uni": "readonly",
		"plus": "readonly",
		"tt": "readonly",
		"qq": "readonly",
		"wx": "readonly",
		"Component": "readonly",
		"Page": "readonly",
		"App": "readonly"
    },
    "parser": "babel-eslint",
    "rules": {
		"no-cond-assign": "off",
		"no-mixed-spaces-and-tabs": "off",
		"no-console": ["error", { "allow": ["warn", "error"] }],
		"no-constant-condition": ["error", { "checkLoops": false }],
		"no-empty": ["error", { "allowEmptyCatch": true }]
    }
};
module.exports = {
	tabWidth: 3,
	singleQuote: true,
	trailingComma: 'all',
	printWidth: 100,
	semi: true,
	arrowParens: 'always',
	endOfLine: 'auto',
	bracketSpacing: true,
	overrides: [
		{
			files: ['**/*.html', '**/*.css', '**/*.scss', '**/*.json', '**/*.md'],
			options: {
				singleQuote: false,
			},
		},
	],
};

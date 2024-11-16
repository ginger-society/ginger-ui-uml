module.exports = {
	preset: 'ts-jest',
	verbose: true,
	testEnvironment: 'jsdom',
	collectCoverageFrom: [
		'<rootDir>/src/**/*.{ts,tsx,js,jsx}',
		'!<rootDir>/src/**/*.stories.{ts,tsx,js,jsx}'
	],
	coveragePathIgnorePatterns: [
		'<rootDir>/src/stories',
		'<rootDir>/src/index.tsx',
		'<rootDir>/src/mdx.d.ts'
	],
	modulePaths: ['<rootDir>/src'],
	moduleNameMapper: {
		'@src/(.*)': '<rootDir>/src/$1'
	},
	modulePathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
	setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
	testMatch: [
		'<rootDir>/src/**/__tests__/**/*.[jt]s?(x)',
		'<rootDir>/src/**/?(*.)+(spec|test).[jt]s?(x)'
	],
	transform: {
		'\\.(jpg|jpeg|png|eot|otf|webp|svg|ttf|woff|woff2|webm)$':
			'jest-transform-stub'
	}
	// coverageThreshold: {
	// 	global: {
	// 		branches: 38,
	// 		functions: 63,
	// 		lines: 70,
	// 		statements: 70
	// 	}
	// }
}

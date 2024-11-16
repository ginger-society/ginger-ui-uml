import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import terser from '@rollup/plugin-terser'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import del from 'rollup-plugin-delete'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import typescript from 'rollup-plugin-typescript2'
import ttypescript from 'ttypescript'
import pkg from './package.json'

export default {
	input: 'src/index.tsx',
	output: [
		{
			format: 'cjs',
			dir: 'dist/cjs',
			preserveModules: true,
			preserveModulesRoot: 'src',
			exports: 'named'
		},
		{
			format: 'es',
			dir: 'dist/esm',
			preserveModules: true,
			preserveModulesRoot: 'src',
			exports: 'named'
		}
	],
	external: [
		...Object.keys(pkg.dependencies || {}),
		...Object.keys(pkg.peerDependencies || {}),
		'./src'
	],
	watch: {
		include: ['src/**/*'],
		exclude: ['node_modules/**', 'lib'],
		clearScreen: false
	},
	plugins: [
		peerDepsExternal(),
		typescript({
			typescript: ttypescript,
			tsconfig: './tsconfig.build.json'
		}),
		nodeResolve(),
		commonjs(),
		babel({
			babelHelpers: 'bundled',
			exclude: 'node_modules/**',
			extensions: ['.ts', '.tsx'],
			presets: ['@babel/env', '@babel/preset-react']
		}),
		terser(),
		del({ targets: 'dist/*' }),
		postcss({
			plugins: [autoprefixer(), cssnano()],
			inject: false,
			extract: 'index.css',
			minimize: true,
			modules: {
				generateScopedName: `[hash:base64:5]`,
				hashPrefix: 'prefix'
			}
		})
	]
}

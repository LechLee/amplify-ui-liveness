const _ = require('lodash');
const { readdir } = require('fs').promises;
const { defineConfig } = require('vite');
const path = require('path');
const { name, dependencies } = require('./package.json');
const react = require('@vitejs/plugin-react-swc');
const dts = require('vite-plugin-dts');
const typescript = require('@rollup/plugin-typescript');
const commonjs = require('@rollup/plugin-commonjs');
// const externals = require('rollup-plugin-node-externals');

const sourceMap = false;
const tsconfig = 'tsconfig.dist.json';

module.exports = () => {
    return defineConfig({
        plugins: [
			// commonjs(),
            // react(),
            // dts({outputDir : 'dist/types', insertTypesEntry: true}),
			// externals({ include: ['@aws-amplify', 'react', 'react-dom'] }),
			typescript({
				outDir: 'dist/types',
				declaration: true,
				sourceMap,
				tsconfig,
			  }),
        ],
        build: {
            lib: {
                entry: {
					index : 'src/index.ts'
				},
                formats: ['esm', 'cjs']
            },
            rollupOptions: {
                external: ['@aws-amplify','react', 'react-dom'],
				// output: {
				// 	entryFileNames: `[name].[hash].mjs`,
				// 	chunkFileNames: `[name].[hash].mjs`,
				//   },
            },
            outDir: 'dist',
            target: 'esnext'
        },
        resolve: {}
    });
};
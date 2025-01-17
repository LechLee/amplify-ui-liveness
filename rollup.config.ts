import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import styles from 'rollup-plugin-styles';

import externals from 'rollup-plugin-node-externals';

// common config settings
const input = ['src/index.ts'];
const sourceMap = false;
const tsconfig = 'tsconfig.dist.json';

const config = defineConfig([
  // CJS config
  {
    input,
    output: {
      dir: 'dist',
      format: 'cjs',
    },
    plugins: [
      commonjs(),
      externals({ include: ['@aws-amplify', 'react', 'react-dom'] }),
      typescript({ declarationDir: 'dist/types', sourceMap, tsconfig }),
    ],
  },
  // ESM config
  {
    input,
    output: {
      dir: 'dist/esm',
      format: 'es',
      entryFileNames: '[name].mjs',
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
    plugins: [
      commonjs(),
      externals({ include: ['@aws-amplify', 'react', 'react-dom'] }),
      typescript({
        outDir: 'dist/esm',
        declaration: false,
        sourceMap,
        tsconfig,
      }),
    ],
  },
  // CSS config
  {
    input: 'src/styles.ts',
    output: {
      dir: 'dist',
      format: 'cjs',
      assetFileNames: '[name][extname]',
    },
    plugins: [styles({ mode: ['extract'] })],
  },
]);

export default config;

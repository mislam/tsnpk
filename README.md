# TSNPK

TSNPK (TypeScript Node Project Kit) comes pre-installed with all bells and whistles you would need for your next NodeJS project:

- TypeScript: Compiler
- ESLint: Code Linter
- Prettier: Code Formatter
- Vitest: Testing Framework
- Rollup: Module Bundler

## Start

Install NPM dependencies:

```bash
pnpm install
```

Make a copy of `.env` file:

```bash
cp .env.example .env
```

Run:

```bash
pnpm dev
```

It will watch for changes and compile as you go.

## Test

Run test with instant watch mode:

```bash
pnpm test
```

## Build

The compiled code is stored in `build`. So you may run it with:

```bash
node ./build
```

_"It's that simple!"_ – 🤩

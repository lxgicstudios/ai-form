# @lxgicstudios/ai-form

[![npm version](https://img.shields.io/npm/v/%40lxgicstudios%2Fai-form.svg)](https://www.npmjs.com/package/@lxgicstudios/ai-form)
[![npm downloads](https://img.shields.io/npm/dm/%40lxgicstudios%2Fai-form.svg)](https://www.npmjs.com/package/@lxgicstudios/ai-form)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/lxgic-studios/ai-form)](https://github.com/lxgic-studios/ai-form/stargazers)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue)](https://www.typescriptlang.org/)



Generate form components with validation from plain English descriptions.

## Install

```bash
npm install -g @lxgicstudios/ai-form
```

## Usage

```bash
npx @lxgicstudios/ai-form "signup form with email, password, name"
npx @lxgicstudios/ai-form "checkout form with address and payment" -t
npx @lxgicstudios/ai-form "contact form" -o ContactForm.tsx -t
```

## Options

- `-t, --typescript` - Generate TypeScript
- `-l, --library <lib>` - Validation library (default: react-hook-form + zod)
- `-o, --output <file>` - Write to file

## Setup

```bash
export OPENAI_API_KEY=sk-...
```

## License

MIT

# react-abc-modal

A react modal as simple as ABC — lightweight, accessible, and fully customizable.  

[![npm version](https://img.shields.io/npm/v/react-abc-modal?color=brightgreen)](https://www.npmjs.com/package/react-abc-modal)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![build](https://github.com/Claire-Lavigne/react-abc-modal/actions/workflows/release.yml/badge.svg)](https://github.com/Claire-Lavigne/react-abc-modal/actions)

## Features
- Fully customizable via props and classes
- Responsive
- Keyboard and screen-reader friendly
- The modal can be closed via:
  - **Escape** key
  - **Overlay click** *(optional)*
  - **Close icon** *(optional)*
- Written in TypeScript
- No external dependencies (only React)

<img src="https://github.com/Claire-Lavigne/repo-images/blob/main/React-abc-modal.JPG" width="60%">

## Stack 

- React 18+
- TypeScript + TSX
- Babel for build
- Vite for playground
- GitHub Actions for CI/CD

## Installation

```bash
npm install react-abc-modal
# or
yarn add react-abc-modal
```

**Links**: [NPM package](https://www.npmjs.com/package/react-abc-modal) and 
[Yarn package](https://yarnpkg.com/package/react-abc-modal)

## Quick start

```js
import { useState } from "react";
import Modal from "react-abc-modal";

const yourComponent = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open modal</button>

      <Modal isOpen={isOpen} setOpen={setOpen} closeOutside icon>
        <h1>Hello from react-abc-modal</h1>
        <p>Press Escape or click outside to close.</p>
      </Modal>
    </>
  );
};

export default yourComponent;
```
Supports any children: text, forms, images, or even other React components.

## Props Reference

| Prop             | Type                      | Required | Default          | Description                         |
| ---------------- | ------------------------- | -------- | ---------------- | ----------------------------------- |
| `isOpen`         | `boolean`                 | ✅        | –                | Controls modal visibility           |
| `setOpen`        | `(open: boolean) => void` | ✅        | –                | Updates modal open state            |
| `closeOutside`   | `boolean`                 | ❌        | `true`           | Close modal when clicking overlay   |
| `icon`           | `boolean`                 | ❌        | `true`           | Show default close icon             |
| `classOverlay`   | `string`                  | ❌        | –                | Custom CSS class for overlay        |
| `classSection`   | `string`                  | ❌        | –                | Custom CSS class for modal content  |
| `classIconClose` | `string`                  | ❌        | –                | Custom CSS class for close icon     |
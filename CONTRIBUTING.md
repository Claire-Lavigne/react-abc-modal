# 🤝 Contributing to react-abc-modal

Thanks for your interest in improving **react-abc-modal**!   
This project is a lightweight, accessible React modal built with **TypeScript + TSX**, bundled via **Babel**, and published automatically through **GitHub Actions**.

This project was first created during my OpenClassrooms apprenticeship as a JavaScript React developer. 

Any contribution is welcome — whether it’s bug fixes, new features, or improving documentation!

## Quick Setup

```bash
git clone https://github.com/Claire-Lavigne/react-abc-modal.git
cd react-abc-modal
npm install
npm run build
npm run dev:playground # Run the local demo
```
Open your browser at http://localhost:5173

## Project Structure
```bash
react-abc-modal/
├── src/lib/
│   ├── Components/
│   │   ├── Modal.tsx          # Main modal component (TSX)
│   │   ├── Modal.module.css   # Default styling
│   │   └── close.svg          # Default close icon
│   ├── index.ts               # Library entry point
│   └── custom.d.ts            # CSS & asset declarations
├── dist/                      # Compiled output (generated)
├── playground/                # Local Vite app for testing
└── .github/workflows/         # CI/CD (build + publish)
```

## Guidelines
- Use TypeScript (TSX)
- Avoid external dependencies (keep it light)
- Allow full customization via props
- Keep it responsive

## Pull Request Process

- Create a feature branch: `git checkout -b feature/your-feature-name`
- Check types and build: `npm run check && npm run build`
- Commit clearly (e.g. `feature: add ariaLabel prop for accessibility`)
- Push your changes: `git push origin feature/your-feature-name`
- Open a Pull Request to main

## CI/CD

The repository uses GitHub Actions for:

- Type-checking & build verification on each push
- Automatic npm publishing when a version tag (`vX.Y.Z`) is pushed

You can find the workflow file at: `.github/workflows/publish.yml`

## Publish process
Update the version in `package.json` (for example: `"2.1.0"`)  

 ```bash
git add package.json
git commit -m "release vX.Y.Z"
git push origin main
git tag vX.Y.Z
git push origin vX.Y.Z
npm view react-abc-modal version # to verify version on NPM
```

## MIT License 
© 2025 Claire Lavigne

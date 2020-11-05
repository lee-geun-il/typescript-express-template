# typescript-express-template
 This is a template for TypesSript and Express


STEP 1. Initialize a Node.js project and update `package.json`.

```bash
npm init
```
```json
{
  "scripts": {
    "start": "nodemon ./development/index.ts"
  },
	"author": "Lee Geun Il",
	"license": "MIT"
}

```


STEP 2. Install modules.
```bash
npm install express --save-prod
npm install nodemon typescript ts-node @types/node @types/express --save-dev
```

STEP 3. Initialize the TypeScript compiler and update `tsconfig.json`.
```bash
tsc --init
```
```json
{
  "compilerOptions": {},
  "include": [
    "./development/**/*",
  ]
}
```

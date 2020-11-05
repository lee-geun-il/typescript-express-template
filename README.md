# typescript-express-template
 This is a template for TypesSript and Express


STEP 1. Initialize a Node.js project.
```bash
npm init
```
`package.json`
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

STEP 3. Initialize the TypeScript compiler.
```bash
tsc --init
```
tsconfig.json
```json
{
  "compilerOptions": {},
  "include": [
    "./development/**/*",
  ]
}
```

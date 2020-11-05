# typescript-express-template
 This is a template for TypesSript and Express


STEP 1. 노드 프로젝트를 초기화하고 `package.json`를 수정합니다.

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


STEP 2. 모듈을 설치합니다.
```bash
npm install express --save-prod
npm install nodemon typescript ts-node @types/node @types/express --save-dev
```

STEP 3. 타입스크립트 컴파일러를 초기화하고 `tsconfig.json`를 수정합니다.
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

STEP 4. 디렉토리를 설계합니다.
```
.
├─ development
│  └─ index.ts
├─ node_modules
├─ package.json
└─ tsconfig.json

```

STEP 5. `index.ts`를 작성합니다.

```
import express from 'express';
const app = express();
const PORT = 8000;
app.get('/', function (req,res) {
    res.send('Express + TypeScript Server')
});
app.listen(PORT, () => {
    console.log(`⚡️[SERVER]: Server is running at https://localhost:${PORT}`);
});
```

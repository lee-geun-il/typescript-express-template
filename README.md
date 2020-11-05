# typescript-express-template

## HOW TO
...

## PROCESS
STEP 1. **Create React App**으로 프로젝트를 생성합니다.
```bash
npx create-react-app project-name --template typescript
cd project-name
npm start
```

STEP 2. `App.tsx`를 수정합니다.
```
import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App(this: any) {
  const [username, setUsername] = useState(0);
  useEffect(() => {
    fetch('http://localhost:3001/api')
      .then(res=>res.json())
      .then(data=>setUsername(data.username));
  })

  return (
    <div className="App">
      <header className="App-header">
        {username ? `Hello ${username}` : 'Hello World'}
      </header>
    </div>
  );
}

export default App;

```


STEP 3. 모듈을 설치하고 `server.js`를 작성합니다. 

```
npm install npm-run-all express body-parser cors --save-prod 
```
`server.js`
```js
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', (req, res)=> res.json({username:'bryan'}));

app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})
```

STEP 4. `package.json`을 수정합니다.
```
  "scripts": {
    "start": "npm-run-all --parallel start:**",
    "start:client": "react-scripts start",
    "start:server": "node ./server/server.js",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
```




---


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
npm install nodemon express-handlebars typescript ts-node @types/node @types/express @types/express-handlebars --save-dev
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
├─ views
│  ├─ index.handlebars
│  └─ layouts
│     └─ main.handlebars
├─ package.json
└─ tsconfig.json

```

STEP 5. `index.ts`를 작성합니다.

```
import express from 'express';
import handlebars from 'express-handlebars';

const app = express();
const PORT = 8000;

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('index');
});

app.listen(PORT, () => {
    console.log(`⚡️[SERVER]: Server is running at https://localhost:${PORT}`);
});
```

STEP 6. `*.handlebars`를 작성합니다. (에러 페이지를 추가해야 합니다만.)

`index.handlebars`
```handlebars
<h1>Example App: Home</h1>
```
`main.handlebars`
```handlebars
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>TypeScript-Express-Template</title>
</head>
<body>
    {{{body}}}
</body>
</html>
```



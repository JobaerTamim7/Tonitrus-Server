# Tonitrus Server (A simple express server)
## **Project Purpose**:
- Learning simple express
-  Introduction with basic TypeScript
- Understanding error warnings 
- Understadning more about different objects
- Find out the issue and solve them

## **Project Learnings**
- **TypeScript Compiler Options :** 
<br>
    - Go [here](https://www.typescriptlang.org/tsconfig/) <br>
    - Read the docs througly and you will get most of the answer
    - Major options used in this project:
        - allowUnreachableCode : allow unreachable code (boolean)
        - strict : enables all types of  type checking for TypeScript (i.e. strictly checks null ) We may set some strictness to false for better config like strictNullCheck
        - allowImportingTsExtensions : allows to import ts or tsx files
        - moduleResolution :<br> 
            1. "node16" or "nodenext" ====> supports both ECMAScript and CommonJS<br>
            2. "node10" ====> just for commonjs
            <br><br>
            Important difference got from GPT: <br>

| Feature                    | `ESNext`                       | `NodeNext`                                   |
|----------------------------|-------------------------------|-----------------------------------------------|
| Target environment         | Modern browsers or bundlers    | Modern **Node.js** (with ESM)                |
| File extension handling    | Not strict (doesn't care much) | Strict (`.ts`, `.js`, `.mjs`, `.cjs`)        |
| Uses `package.json` "type" | ❌ No                           | ✅ Yes                                        |
| Node-like resolution       | ❌ Not accurate                 | ✅ Mimics real Node.js behavior               |
| Common use                 | Frontend apps, libraries       | Backend apps using Node’s native ESM support |
            

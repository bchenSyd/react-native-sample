## debug jest 
>https://github.com/facebook/jest/issues/3736
1. package chain: `source-map-support` required; installed via `babel-regitser` which is included via `babel-cli`
```
boche1@UNISYDWS065 MINGW64 /d/relay-todo-modern (master)
$ npm ls source-map-support
D:\relay-todo-modern
`-- babel-cli@6.24.1
  `-- babel-register@6.24.1
    `-- source-map-support@0.4.14
```

2. npm script
`"debug": "mocha --compilers js:babel-register --source-maps  --recursive \"js/**/*.spec.js\" --require test/setup.js --debug-brk --inspect"`

3. in `ES6` domain, `babel-register` call `source-map-support.install()` which is the key. this was revealled by [graphql-tools\test.ts](https://github.com/bochen2014/graphql-tools/blob/develop/src/test/tests.ts#L1);  
Similarly, in typescript world, , we have `ts-node/register` which does the same
[ts-node/register](https://github.com/bochen2014/graphql-tools/blob/develop/package.json#L23);

[source code](https://github.com/babel/babel/blob/7.0/packages/babel-cli/src/_babel-node.js#L9)
```
//babel-cli/_babel-node.js line 9
import register from "babel-register";  // under the hood , this will call source-map-support.install() which is the real worker
```
or call 
`require('source-map-support').install();` directly. same effect.


## how to use `flow-typed`?

```
yarn add --dev flow-typed

yarn run flow-typed -- install jest@^20

```
## how does it work?
pretty much the same as `typings` or `definitely-typed` in typescript.

https://flow.org/en/docs/libdefs/#toc-what-s-a-library-definition
>NOTE: Using the /flow-typed directory for libdefs is a convention that enables Flow to JustWork™ out of the box and encourages consistency across projects that use Flow, but it is also possible to explicitly configure Flow to look elsewhere for libdefs using the [libs] section of your .flowconfig.

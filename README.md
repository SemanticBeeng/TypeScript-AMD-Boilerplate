TypeScript AMD (Require.js) Boilerplate
======================
See the original project for details.
This is a clone simply to experiment with the TypeScript development workflow.

#Notes on changes
----------

## TypeScript definitions

See the folder 'assets/scripts/typings'.

__Commands to install the same type definitions__

```

$ npm install tsd -g

$ tsd query requirejs --resolve --overwrite --save --action install
$ tsd query handlebars --resolve --overwrite --save --action install
$ tsd query jquery --resolve --overwrite --save --action install
$ tsd query jquery.clientSideLogging  --resolve --overwrite --save --action install


```

## JavaScript libraries

See the folder 'assets/scripts/libs'.

## Useful resources 


* [My TypeScript Workflow Example](http://www.codebelt.com/typescript/my-typescript-workflow-examples/)

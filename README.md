TypeScript AMD (Require.js) Boilerplate
======================
See the original project for details.
This is a clone simply to experiment with the TypeScript development workflow.

#A development workflow involving TypeScript, Intellij IDEA, Grunt and Node.js  
----------

1. Uses external libraries (jQuery, etc)
1. Uses TypeScript module definitions retrieved with the DefinitielyTyped module manager 
1. Uses 'requires.js' to load modules at runtime
1. Builds with Grunt
1. Runs on Node.js


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

* [intellij idea - How do you import jquery's definition file in Typescript 1.0? - Stack Overflow](http://stackoverflow.com/questions/26071468/how-do-you-import-jquerys-definition-file-in-typescript-1-0)

* [TypeScript Internal and External Modules](http://www.codebelt.com/typescript/typescript-internal-and-external-modules/)

* [TypeScript AMD with RequireJS Tutorial](http://www.codebelt.com/typescript/typescript-amd-with-requirejs-tutorial/)

* [Modularization in TypeScript - CodeProject](http://www.codeproject.com/Articles/528295/ModularizationplusinplusTypeScript)

* [RequireJS API](http://requirejs.org/docs/api.html#config)

* [Sample TypeScript application with AMD modules](https://github.com/wiktor-k/ts-amd)

* [TypeScript - We're searching a good workflow for our typescript project. Which approaches do you use?](https://typescript.codeplex.com/discussions/507413)

* [I can make this work...: TypeScript and RequireJS (Keep It Simple)](http://icanmakethiswork.blogspot.com/2014/02/typescript-and-requirejs-keep-it-simple.html)

* [basarat/typescript-amd](https://github.com/basarat/typescript-amd)

* [javascript - Typescript + RequireJs + AngularJs - Stack Overflow](http://stackoverflow* .com/questions/23560800/typescript-requirejs-angularjs)

* [What's the correct way to use requireJS with typescript?](http://stackoverflow.com/questions/20079464/whats-the-correct-way-to-use-requirejs-with-typescript)


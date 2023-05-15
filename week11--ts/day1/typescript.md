# Typescript

[Documentation](https://www.typescriptlang.org/download)

If JS is the free soul who came out of a garage, Typescript went to a college and got a degree ,they're scheduled and detail oriented.

**Strictly typed**

Are you making a variable that is a string? Well then you need to call that a string.

Are you making a variable that is an integer? Well then you need to call it an integer.

## starting typescript

We installed in globally with

    npm install -g typescript

Next, initialize it in the folder you want to use it in

    tsc --init

It'll create a tsconfig.json file. This file is commented out except for a few pieces. It's documentation.

    'target': "es2016"

When you compile the JS, compile it into es6 JS.

### Lines 14, 28, 29, 52, 53, and 66 need to be uncommented or changed.

    "rootDir": "./"

Specify the root folder within your source files. Make a new file called 'src', then add that to the code above:

    "rootDir": "./src"

Next, under Emit,

    "outDir": "./dist"

Specify an output folder for all emitted files.

Uncomment the line underneath, "removeComments":true. This'll remove any comments you write when it's compiling into JS

Last, line 66

    "noEmitOnError":true,

So if we have errors in our typescript, don't make a JS file.

### First Typescript

Make a file inside 'src' called typescript.ts.

### Running Typescript

After writing stuff in the typescript file, run

    tsc

This is 'typescript compile'. It'll make the dist folder and compile the ts file into a js file that will go in that dist folder (if there are no errors)

In the JS files, it says 'use strict' at the top; Google that later. Joe gave a brief explanation.

### NoUnusedParameters

tsconfig file line 89. Uncomment. This keeps you from putting arguments in functions that you don't actually end up using

### NoUnusedLocals

tsconfig file line 88. Uncomment. No unused local variables in functions etc. The code below will error because we aren't using the variable name anywhere.

    const convertToUppercase = (wordToUpperCase: string): string => {
        const name = ""
        console.log(wordToUpperCase);
        return "hello";
    };
    const upperCasedValue = convertToUppercase("Hello");

### To run javascript:

    node dist/functions.js

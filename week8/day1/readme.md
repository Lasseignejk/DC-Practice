# how to set up a node server

## Step 1

1. `npm init` this initializes your server to accept packages. Hey, a bunch of stuff is coming. Be ready to accept it!

- This creates the package.json file. It has the details of all the tools you've downloaded, like 'express' or 'cowsay'

- If you don't want to have to hit enter a whole bunch of times, you can just write `npm init -y` and it skips all of that; assumes you want the default

## Step 2

2. `npm install express` or `npm i express`

- This creates a whole buncha stuff, including node_modules.

- DO NOT NOT NOT NOT NOT NOT PUSH YOUR NODE_MODULES UP TO GITHUB you will get a WARNING from github telling you to not do it again. if you keep doing it, they will DELETE YOUR REPOSITORY

- node_modules is ~2mb with express installed. if all the github users pushed that up, that'd be 166 terabytes of data. that's why github doesn't want it.

- go into your file, create a .gitignore file, go inside, write 'node_modules' and you should see the file 'node_modules' get dimmed out. That's because git is now ignoring that file.

- you can also go into github desktop, right click the node_modules, and hit ignore file. it'll make the gitignore file for you

- if you're cloning someone's project down, first thing: `npm i` installs all the necessary tools (if they used node) to run the program

- express handles the http methods, rules to transfer data

- postman mimics making http requests

## Step 3

3. store your packages as variables

- `const express = require("express");` require is like import in python. it goes into the node_modules and finds the 'express' folder.

- `const app = express();`

- `const PORT = 3000;` PORT is in caps so we are less likely to try to use 'port' somewhere else. don't want that to change! the port number can be anything rom 3000 to 3099. those are the available ports for us to use.

- `node --watch nameoffile.js` will update the server as you change it. MAKE SURE YOU CLOSE YOUR SERVERS before you close your computer

## Step 4

4. Your code needs to have this in it for your server to be ready to start making routes.

```
const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, console.log(`Listening on port ${PORT}`));
```

## Step 5

5. Run `node --watch app.js` and you should see your console.log in your termianl showing your port is ready to accept request.

## Step 6 routes

- this is a basic route

```
app.get("/jaye", (req, res) => {
    response.send("jaye");
});
```

- if you put a console.log instead of a response, the request will never finish. Infinity. every route needs a RESPONSE.

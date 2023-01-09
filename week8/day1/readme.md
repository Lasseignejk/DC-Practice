# how to set up a node server

1. `npm init` this initializes your server to accept packages.

- If you don't want to have to hit enter a whole bunch of times, you can just write `npm init -y` and it skips all of that; assumes you want the default

2. `npm install express` or `npm i express`

- This creates a whole buncha stuff, including node_modules.
- DO NOT NOT NOT NOT NOT NOT PUSH YOUR NODE_MODULES UP TO GITHUB you will get a WARNING from github telling you to not do it again. if you keep doing it, they will DELETE YOUR REPOSITORY

- go into your file, create a .gitignore file, go inside, write 'node_modules' and you should see the file 'node_modules' get dimmed out. That's because git is now ignoring that file.

- you can also go into github desktop, right click the node_modules, and hit ignore file. it'll make the gitignore file for you

- if you're cloning someone's project down, first thing: `npm i` installs all the necessary tools (if they used node) to run the program

3. store your packages as variables

- `const express = require("express");` require is like import in python.
- `node --watch nameoffile.js` will update the server as you change it. MAKE SURE YOU CLOSE YOUR SERVERS before you close your computer

4. Your code needs to have this in it for your server to be ready to start making routes.

```const express = require("express");
const app = express();
// choose a number between 3000 and 3099; those are the available ports for us to use
const PORT = 3000;

app.listen(PORT, console.log(`Listening on port ${PORT}`));
```

5. Run `node --watch app.js` and you should see your console.log in your termianl showing your port is ready to accept request.

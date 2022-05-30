// GLOBALS      - No WINDOW !!!

// __dirname    - path to current directory
// __filename   - file name
// require      - function to use modules (commonJS)
// module       - info about current module (file)
// process      - info abut env where the program is being executed


console.log(__dirname);
setInterval(() =>{
    console.log('hello world')
}, 1000)


// npm --global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (set's ^^ answers to default)

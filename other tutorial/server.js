console.log("Hello World");

// console.log(global);

const os = require("os");
const path = require("path");
const { add, subtract, multiply, divide } = require("./math");

// console.log(os.type()); // Windows_NT
// console.log(os.version()); // Windows 10 Enterprise
// console.log(os.homedir()); // C:\Users\tgogisvanidze

// console.log(__dirname); // C:\Users\tgogisvanidze\Desktop\node
// console.log(__filename); // C:\Users\tgogisvanidze\Desktop\node\server.js

// console.log(path.dirname(__filename)); // C:\Users\tgogisvanidze\Desktop\node
// console.log(path.basename(__filename)); //server.js
// console.log(path.extname(__filename)); // .js

// console.log(path.parse(__filename)); // {root: 'C:\\',dir: 'C:\\Users\\tgogisvanidze\\Desktop\\node',base: 'server.js',ext: '.js',name: 'server'}

console.log(add(2, 3));
console.log(subtract(2, 3));
console.log(multiply(2, 3));
console.log(divide(2, 3));

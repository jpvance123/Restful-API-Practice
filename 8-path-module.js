
const path = require('path')

//console.log(path.sep)

const filePath = path.join('/content','subfolder','test.txt')
const base = path.basename(filePath)
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')

console.log(filePath)   // \content\subfolder\test.txt
console.log(base)       // test.txt
console.log(absolute)   // C:\Users\jpvan\Desktop\NodeTutorial\content\subfolder\test.txt


import path from 'path';
import url from 'url';
const filePath = './dir1/dir2/test.txt'

//basename()  ----------> test.txt
console.log(path.basename(filePath));

//dirname()  ----------> ./dir1/dir2
console.log(path.dirname(filePath));

//extname()  ----------> .txt
console.log(path.extname(filePath));

//parse()  ----------> { root: '', dir: './dir1/dir2', base: 'test.txt', ext: '.txt', name: 'test' }
console.log(path.parse(filePath));

const __fileName = url.pathToFileURL(import.meta.url)
const __dirname = path.dirname(__fileName)

console.log(__dirname, __fileName)

//join()  ----------> ./dir1/dir2/test.txt
const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'test.txt')

// resolve()  ----------> /Users/username/Documents/Projects/NodeJS/dir1/dir2/test.txt
 const filePath3 = path.resolve(__dirname, 'dir1', 'dir2', 'test.txt')
 console.log(filePath2, filePath3)
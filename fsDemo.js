//import fs from 'fs';

    //readFile() - callback version

    // fs.readFile('./test.txt', 'utf8', (err, data)=> {
    //     if(err) throw err;
    //     console.log(data);
        
    // })

    // //readFileSync - Synchronous 
    // const data = fs.readFileSync('./test.txt', 'utf8')
    // console.log(data)

import fs from 'fs/promises';

// // readFile() - Promise .then
// fs.readFile('./test.txt', 'utf8')
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

// //readFile() - async/await
const readFile = async () => {
    try {
        const data = await fs.readFile('./test.txt', 'utf8');
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}
//readFile()


// //WriteFile()
// const writeFile = async () => {
//     try {
//         await fs.writeFile('./test.txt', 'Hello, Async/Await!');
//         console.log('File written successfully');
//     } catch (err) {
//         console.log(err);
//     }
// }

// writeFile()
// readFile()


//appendFile()

const appendFile = async () => {
    try {
        await fs.appendFile('./test.txt', '\nThis is appended text');
        console.log('File appended successfully');
    } catch (err) {
        console.log(err);
    }
}
appendFile()
readFile()
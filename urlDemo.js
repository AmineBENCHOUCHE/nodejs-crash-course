import url from 'url';

const urlString = 'http://www.google.com/search?q=node.js'

//URL Object
const urlObj = new URL(urlString);
console.log(urlObj)
///////////////////////////////////////////
// URL {
//     href: 'http://www.google.com/search?q=node.js',
//     origin: 'http://www.google.com',
//     protocol: 'http:',
//     username: '',
//     password: '',
//     host: 'www.google.com',
//     hostname: 'www.google.com',
//     port: '',
//     pathname: '/search',
//     search: '?q=node.js',
//     searchParams: URLSearchParams { 'q' => 'node.js' },
//     hash: ''
//   }

//format()
console.log(url.format(urlObj))

// import.meta.url - fileUrl
console.log(import.meta.url)

// fileURLToPath()
console.log(url.fileURLToPath(import.meta.url))

// queries
const params = new URLSearchParams(urlObj.search)

console.log(params) // node.js
console.log(params.get('q'))
params.append('limit', '5')
console.log(params)
params.delete('limit')
console.log(params) 
// create hashes , encrypt and decrpt data

import crypto from 'crypto';
//createHash
const hash = crypto.createHash('sha256')
hash.update('password1234')
console.log(hash.digest('hex'));

//randomBytes
crypto.randomBytes(16, (err, buf) => {
    if (err) throw err;
    const token = buf.toString('hex');
    //console.log(token);
})

console.log('----------------------------------------------------------------')
//createCipheriv & createDecipheriv
//1
const algorithm = 'aes-256-cbc';
//2
const key = crypto.randomBytes(32)
//3
const iv = crypto.randomBytes(16)

const cipher = crypto.createCipheriv(algorithm, key, iv)
let encrypted = cipher.update('Hello, this is a secret message', 'utf8', 'hex')
encrypted += cipher.final('hex')
console.log('Encrypted', encrypted)

//decrypt the message
const decipher = crypto.createDecipheriv(algorithm, key, iv)
let decrypted = decipher.update(encrypted, 'hex', 'utf8')
decrypted += decipher.final('utf8')
console.log('Decrypted', decrypted)


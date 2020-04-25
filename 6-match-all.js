const regex = /[a-c]/g
const str = 'abc'
const iterator = str.matchAll(regex)
Array.from(iterator, result => console.log(result))
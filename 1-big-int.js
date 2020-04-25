let oldNum = Number.MAX_SAFE_INTEGER
console.log('oldNum', oldNum)
++oldNum
console.log('oldNum', oldNum)
++oldNum
console.log('oldNum', oldNum)

// is important the n
let newNum = 9007199254740992n
console.log('newNum', newNum)
++newNum
console.log('newNum', newNum)
++newNum
console.log('newNum', newNum)
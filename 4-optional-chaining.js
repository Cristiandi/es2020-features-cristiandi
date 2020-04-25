const x = { prop1: { prop2: 100 } }

const p1 = x.prop1.prop2
console.log('p1', p1)

// in this moment current version 14.0.0 this doesn't work in nodejs
const p2 = x.prop1?.nanPro?.go?.hi
console.log('p2', p2)
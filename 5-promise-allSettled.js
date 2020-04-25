const pArray = [
  Promise.resolve(10),
  Promise.reject(null),
  Promise.reject(new Error('Oh no'))
]

Promise.allSettled(pArray)
  .then(results => {
    console.log('all promises settled', results)
  })
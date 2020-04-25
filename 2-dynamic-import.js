const currentDate = new Date()

// u can change the route dynamically
if (currentDate.getUTCHours() > 12) {
  const module = require('./2-1-dynamic-import')
  const result = module.sum(5, 5)
  console.log('result', result)
} else {
  const module = require('./2-2-dynamic-import')
  const result = module.sub(5, 5)
  console.log('result', result)
}
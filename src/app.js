const app = require('express')()

app.get('/', (req, res, next) => {
  res.send('Oi zorra')
})

app.listen(3000)

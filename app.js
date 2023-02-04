const express = require('express')
const app = express()
const port = 3000


var testRoutes = require('./routes/crud');

// Import my test routes into the path '/test'
app.use('/v1', testRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
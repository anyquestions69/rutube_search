// Express
const express = require('express')
const app = express()

const video = require('./routers/videoRouter.js')

var cookieParser = require('cookie-parser');
const jsonParser = express.json();
app.use(cookieParser());
app.use(jsonParser)

// Главная
app.get('/', (_req, res) => {
  res.status(200).json({
    message: 'ping',
  })
})



app.use('/video', userRouter)

app.listen(3000, () => {
  console.log('Сервер запущен')
  console.log('server started')
})
const express = require('express')
const config = require('config')
const path = require('path')
const mongoose = require('mongoose')

const authRoutes = require('./routes/auth.routes')
const linkRoutes = require('./routes/link.routes')
const redirectRoutes = require('./routes/redirect.routes')

const app = express()

app.use(express.json({ extended: true }))

app.use('/api/auth', authRoutes)
app.use('/api/link', linkRoutes)
app.use('/t', redirectRoutes)

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = config.get('port') || 5000

const start = async () => {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })

    app.listen(PORT, () => console.log(`App has been started on port: ${PORT}`))
  } catch (err) {
    console.log('Server error', err.message)
    process.exit(1) // complete this process in case of error
  }
}

start()

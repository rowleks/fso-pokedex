const express = require('express')
const path = require('path')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

//Health check
app.get('/api/health', (_, res) => {
  res.send('ok')
})

// Handle client-side routing - serve index.html for all routes
app.get('/{*splat}', (_, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})

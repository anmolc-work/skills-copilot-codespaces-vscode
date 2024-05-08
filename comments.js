// Create web server with express
// create a route to create a new comment
// create a route to list all comments
// create a route to get a single comment
// create a route to update a comment
// create a route to delete a comment

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const comments = require('./comments')

app.use(bodyParser.json())

// create a route to create a new comment
app.post('/comments', (req, res) => {
  const comment = comments.create(req.body)
  res.json(comment)
})

// create a route to list all comments
app.get('/comments', (req, res) => {
  const allComments = comments.getAll()
  res.json(allComments)
})

// create a route to get a single comment
app.get('/comments/:id', (req, res) => {
  const comment = comments.get(req.params.id)
  res.json(comment)
})

// create a route to update a comment
app.put('/comments/:id', (req, res) => {
  const comment = comments.update(req.params.id, req.body)
  res.json(comment)
})

// create a route to delete a comment
app.delete('/comments/:id', (req, res) => {
  comments.delete(req.params.id)
  res.json({ success: true })
})

app.listen(3000, () => {
  console.log('Server is running')
})
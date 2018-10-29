const express = require('express');
const path = require('path');
const app = express();

// Getting our POSTS routes
const routes = require('./server/routes/routes');

// Using middleware

app.use(express.static(path.join(__dirname, 'dist')));
app.use('/routes', routes);

// Catch all other routes request and return it to the index
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, 'dist/index.html'))
});





const port = process.env.PORT || 4600;

app.listen(port, (req, res)=>{
  console.log(`RUNNING on port ${port}`);
});

const connectTOMongo = require('./db');
const express = require('express')
var cors =require("cors")
const cookieParser = require('cookie-parser');

connectTOMongo();
const app = express()
const port = 5000

const corsOptions = {
  origin: 'https://inotepad-arjun.vercel.app', // Allow only requests from this origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allow these HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow these headers
  credentials: true,
};

// Use the CORS middleware with options
app.use(cookieParser());
app.use(cors(corsOptions));

app.use(express.json())



app.use(express.json())

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`iNotePad backend listening on port ${port}`)
})
const express = require("express");
const https = require("https") 
const app = express()
const cors = require('cors')
const path = require('path');
const { json } = require("express/lib/response");
const port = process.env.PORT || 1500

const DIST = path.join(__dirname , "dist")

app.use(cors())
app.use(express.static(DIST))

app.use('/api/weather', require('./routes/api/weather'))

app.listen(port, ()=>{
   console.log(`CORS-enabled web server listening on port ${port}`)
})
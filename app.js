// ########################################
// ## Dependencies
// ########################################

var express = require('express')
var path = require('path')

// ########################################
// ## Config
// ########################################

var config = require('./config/config')

// ########################################
// ## App
// ########################################

var app = express()

app.use(express.static('./build'));
app.listen(process.env.PORT || 3000)

// ########################################
// ## API
// ########################################

var api = require('./api/api')

app.use('/api', api)

require('dotenv').config();
const http = require('http');
const express = require('express');
const websocket = require('ws');
const app = express()
const server = http.createServer(app);
const wss = new websocket.Server({server})
const route = require('./routes/route')
const path = require('path')

app.use('/',new route({express:express,path:path}).router);
app.use(express.static(path.join(__dirname,'./static/botGame')))
app.use(express.static(path.join(__dirname,'./static')))
app.use(express.static(path.join(__dirname)))

server.listen(process.env.PORT, () =>{
    console.log(`server listening at port ${process.env.PORT}`)
})


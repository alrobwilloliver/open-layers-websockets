const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http)
const port = process.env.PORT || 3000;
const path = require('path')

// Start the Server
http.listen(port, function () {
    console.log('Server Started. Listening on *:' + port);
});


// Express Middleware
app.use(express.static(path.join(__dirname + '/public')))

// Render Main HTML file
app.get('/', function (req, res) {
    res.sendFile('public/views/index.html', {
        root: __dirname
    });
});

const server = require('./api/server');

const port = 5000;

// START YOUR SERVER HERE
console.log('hey you')

server.listen(port,()=>{
    console.log('server listening', port)
})
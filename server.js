 const Hapi = require('@hapi/hap');
const path = require('path');

 const init = async () => {
    const server = Hapi.server({
            port: 3000,
            host: 'localhost'
    });

    server.route({
       method: 'GET',
       path: '/',
       handler: (request,h)=> {
        return'hello world'
       } 
    })

    await server.start();
    console.log('Server running on %s', server.info.uri);
};
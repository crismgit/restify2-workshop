require('dotenv').config();
const restify = require('restify');
const Nomes = require('./routes/Nomes');
const port = process.env.HTTP_PORT;

const server = restify.createServer();

server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());

server.get('/', (req, res) => res.send({msg: 'Home'}));
server.get('/nome', (req, res) => Nomes.getAll(req, res));
server.get('/nome/:id', (req,res) => Nomes.getNameId(req, res));
server.post('/nome', (req, res) => Nomes.create(req, res));
server.del('/nome/:id', (req, res) => Nomes.remove(req, res));
server.put('/nome/:id', (req, res) => Nomes.update(req, res));

server.listen(port, function() {
  console.log(`Servidor http://localhost:${port}`)
  console.log('Para derrubar o servidor: ctrl + c')
})
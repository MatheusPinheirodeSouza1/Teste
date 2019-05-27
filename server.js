
const restify = require('restify')

const server = restify.createServer({
	name: 'my-rest',
	version: '1.0.0'
})

const fs = require('fs');
const rawdata = fs.readFileSync('db.json');  
const tabela = JSON.parse(rawdata);  
const restaurante = tabela.restaurants;
const corsMiddleware = require('restify-cors-middleware')
const cors = corsMiddleware({  
    origins: ["*"],
    allowHeaders: ["Authorization"],
    exposeHeaders: ["Authorization"],
});
server.get('/restaurante', (req,resp,next)=>{
	resp.json(restaurante)
	return next()
})
 
server.use(cors.actual)

server.get('/restaurante/:id', (req,resp,next)=>{
	const filtered = restaurante.filter(restaurante => restaurante.id === req.params.id)
	if(filtered.length){
		resp.json(filtered[0])
	}else{
		resp.status(404)
		resp.json({message: 'not found'})
	}
	return next()
})

server.listen(3000, ()=>{
	console.log('api online')
})
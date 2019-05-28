
const restify = require('restify')

const server = restify.createServer({
	name: 'my-rest',
	version: '1.0.0'
})

const fs = require('fs');
const rawdata = fs.readFileSync('db.json');  
const tabela = JSON.parse(rawdata);  
const restaurante = tabela.restaurants;
const menu = tabela.menu;
const review = tabela.reviews;
const order = tabela.orders;

const corsMiddleware = require('restify-cors-middleware')
const cors = corsMiddleware({  
    origins: ["*"],
    allowHeaders: ["Authorization"],
    exposeHeaders: ["Authorization"],
});
server.use(cors.actual)

server.get('/restaurante', (req,resp,next)=>{
	resp.json(restaurante)
	return next()
})
server.get('/menu', (req,resp,next)=>{
	resp.json(menu)
	return next()
})
server.get('/review', (req,resp,next)=>{
	resp.json(review)
	return next()
})
server.get('/order', (req,resp,next)=>{
	resp.json(order)
	return next()
})

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

server.get('/menu/:id', (req,resp,next)=>{
	const filtered = menu.filter(menu => menu.id === req.params.id)
	if(filtered.length){
		resp.json(filtered[0])
	}else{
		resp.status(404)
		resp.json({message: 'not found'})
	}
	return next()
})

server.get('/order/:id', (req,resp,next)=>{
	const filtered = order.filter(order => order.id === req.params.id)
	if(filtered.length){
		resp.json(filtered[0])
	}else{
		resp.status(404)
		resp.json({message: 'not found'})
	}
	return next()
})


server.get('/restaurante/delete/:id', (req,resp,next)=>{
	const filtered = restaurante.filter(restaurante => restaurante.id === req.params.id)
	const index = restaurante.findIndex(restaurante => restaurante.id === req.params.id)

	if(filtered.length){
		delete restaurante[index]
		resp.json({message: 'funfou'})
	}else{
		resp.status(404)
		resp.json({message: 'not found'})
	}
	return next()
})

server.listen(3000, ()=>{
	console.log('api online')
})
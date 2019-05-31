
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
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.jsonp());
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

//---------------Cadastrar--------------------
server.post('/restaurante/cadastrar', (req,resp,next)=>{
	var jsonBody = JSON.parse(req.body);
	restaurante[restaurante.length] = jsonBody
	return next()
})
server.post('/menu/cadastrar', (req,resp,next)=>{
	var jsonBody = JSON.parse(req.body);
	menu[menu.length] = jsonBody
	return next()
})
server.post('/review/cadastrar', (req,resp,next)=>{
	var jsonBody = JSON.parse(req.body);
	review[review.length] = jsonBody
	return next()
})
server.post('/order/cadastrar', (req,resp,next)=>{
	var jsonBody = JSON.parse(req.body);
	order[order.length] = jsonBody
	return next()
})
//---------------Editar--------------------
server.post('/restaurante/editar', (req,resp,next)=>{
	var index = -1;
	var jsonBody = JSON.parse(req.body);
	const filtered = restaurante.filter(function(item, i){ if(item.id === jsonBody.id){index = i;return i;}})
	if(index != -1){
		restaurante[index].name =  jsonBody.name
        restaurante[index].category = jsonBody.category
        restaurante[index].deliveryEstimate = jsonBody.deliveryEstimate
        restaurante[index].rating = jsonBody.rating
        restaurante[index].imagePath = jsonBody.imagePath
        restaurante[index].about = jsonBody.about
        restaurante[index].hours = jsonBody.hours
	}else{
		resp.status(404)
		resp.json({message: 'not found'})
	}
	return next()
})
server.post('/menu/editar', (req,resp,next)=>{
	var index = -1;
	var jsonBody = JSON.parse(req.body);
	const filtered = menu.filter(function(item, i){ if(item.id === jsonBody.id){index = i;return i;}})
	if(index != -1){
        menu[index].imagePath = jsonBody.imagePath
        menu[index].name = jsonBody.name
        menu[index].description = jsonBody.description
        menu[index].price =jsonBody.price
        menu[index].restaurantId = jsonBody.restaurantId 
	}else{
		resp.status(404)
		resp.json({message: 'not found'})
	}
	return next()
})
server.post('/review/editar', (req,resp,next)=>{
	var index = -1;
	var jsonBody = JSON.parse(req.body);
	const filtered = review.filter(function(item, i){ if(item.id === jsonBody.id){index = i;return i;}})
	if(index != -1){
		review[index].name =  jsonBody.name
		review[index].name = jsonBody.name
        review[index].rating = jsonBody.rating
        review[index].comments = jsonBody.comments
        review[index].restaurantId = jsonBody.restaurantId
	}else{
		resp.status(404)
		resp.json({message: 'not found'})
	}
	return next()
})
server.post('/order/editar', (req,resp,next)=>{
	var index = -1;
	var jsonBody = JSON.parse(req.body);
	const filtered = order.filter(function(item, i){ if(item.id === jsonBody.id){index = i;return i;}})
	if(index != -1){
		order[index].menuId = jsonBody.menuId
        order[index].restaurantId = jsonBody.restaurantId
	}else{
		resp.status(404)
		resp.json({message: 'not found'})
	}
	return next()
})
//---------------Listar-----------------------
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
//---------------Busca-----------------------
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

//------------DELETE-----------------------
server.get('/restaurante/delete/:id', (req,resp,next)=>{
	var index = -1;
	const filtered = restaurante.filter(function(item, i){ if(item.id === req.params.id){index = i;return i;}})
	if(index != -1){
		delete restaurante[index]
	}else{
		resp.status(404)
		resp.json({message: 'not found'})
	}
	return next()
})
server.get('/menu/delete/:id', (req,resp,next)=>{
	var index = -1;
	const filtered = menu.filter(function(item, i){ if(item.id === req.params.id){index = i;return i;}})
	if(index != -1){
		delete menu[index]
	}else{
		resp.status(404)
		resp.json({message: 'not found'})
	}
	return next()
})
server.get('/order/delete/:id', (req,resp,next)=>{
	var index = -1;
	const filtered = order.filter(function(item, i){ if(item.id === req.params.id){index = i;return i;}})
	if(index != -1){
		delete order[index]
	}else{
		resp.status(404)
		resp.json({message: 'not found'})
	}
	return next()
})
//--------------Editar-----------------------
server.post('/restaurante/editar/:id', (req,resp,next)=>{
	
	return next()
})
server.listen(3000, ()=>{
	console.log('api online')
})
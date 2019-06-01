import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const res = 'http://localhost:3000/restaurante';
const menu = 'http://localhost:3000/menu';
const review = 'http://localhost:3000/review';
const order = 'http://localhost:3000/order';

@Injectable()
export class DbHttp {
  constructor(public http: HttpClient) {
  } 
	public retorno:any;

  //------------Cadastrar
  CreateRestaurante(array:any) {
   
    return this.http.post(res+"/cadastrar", JSON.stringify(
      { id: array.Id , 
        name: array.name,
        category: array.category,
        deliveryEstimate: array.deliveryEstimate,
        rating: array.rating,
        imagePath: array.imagePath,
        about: array.about,
        hours: array.hours
      }));
  }
  CreateMenu(array:any) {
   
    return this.http.post(menu+"/cadastrar", JSON.stringify(
      { id: array.Id , 
        imagePath: array.imagePath,
        name: array.name,
        description: array.description,
        price: array.price,
        restaurantId: array.restaurantId 
      }));
  }
  CreateReview(array:any) {
   
    return this.http.post(review+"/cadastrar", JSON.stringify(
      { name: array.name,
        date: new Date(),
        rating: array.rating,
        comments: array.comments,
        restaurantId: array.restaurantId,
      }));
  }
  CreateOrder(array:any) {
   
    return this.http.post(order+"/cadastrar", JSON.stringify(
      { menuId: array.menuId , 
        restaurantId: array.restaurantId,
      }));
  }

  //------------Editar
  EditarRestaurante(array:any) {
    return this.http.post(res+"/editar", JSON.stringify(
      { id: array.Id,
        name: array.name,
        category: array.category,
        deliveryEstimate: array.deliveryEstimate,
        rating: array.rating,
        imagePath: array.imagePath,
        about: array.about,
        hours: array.hours
      }));
  }
  EditarMenu(array:any) {
    return this.http.post(menu+"/editar", JSON.stringify(
      { id: array.Id , 
        imagePath: array.imagePath,
        name: array.name,
        description: array.description,
        price: array.price,
        restaurantId: array.restaurantId 
      }));
  }
  EditarReview(array:any) {
    return this.http.post(review+"/editar", JSON.stringify(
     { name: array.name,
        date: new Date(),
        rating: array.rating,
        comments: array.comments,
        restaurantId: array.restaurantId,
      }));
  }
  EditarOrder(array:any) {
    return this.http.post(order+"/editar", JSON.stringify(
      { menuId: array.menuId , 
        restaurantId: array.restaurantId,
      }));
  }

  //------------Listar
  ListarRestaurante() {
  	return this.http.get(res);
  }
  ListarMenu() {
    return this.http.get(menu);
  }
  ListarReview() {
    return this.http.get(review);
  }
  ListarOrder() {
    return this.http.get(order);
  }

  //-----------Pesquisar
  Pesquisar(aux:String){
  	return this.http.get(res+"/"+aux);
  }	

  //----------Delete
  Deletar(aux:String,tipo:String){
    if(tipo=='1'){
      console.log(res+"/delete/"+aux)
      return this.http.get(res+"/delete/"+aux)
    }
    else if(tipo=='2'){
      console.log(menu+"/delete/"+aux)
      return this.http.get(menu+"/delete/"+aux)
    }
    else if(tipo=='3'){
      console.log(review+"/delete/"+aux)
      return this.http.get(review+"/delete/"+aux)
    }
    else if(tipo=='4'){
      console.log(order+"/delete/"+aux)
      return this.http.get(order+"/delete/"+aux)
    }
  	
  }
 

}

import { Injectable } from '@angular/core';

export interface ICategory{
  id: number,
  name: string,
  image: string,
}

export interface Iproduct{
  id: number,
  name: string,
  price: number,
  image: string,
}


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getCategory(){
    let categories = [];
    
    let cat1: ICategory = {
      id: 1,
      name: 'Milk',
      image: '../../assets/category/susu.jpg'
    }
    let cat2: ICategory = {
      id: 2,
      name: 'Cookies',
      image: '../../assets/category/kue.jpg'
    }
    let cat3: ICategory = {
      id: 3,
      name: 'T-Shirt',
      image: '../../assets/category/bajuu.jpg'
    }

    categories.push(cat1, cat2, cat3);
    return categories;
  }

  getFuturedProduct(){
    let product = [];
    
    let prod1: Iproduct = {
      id: 1,
      name: 'Blueberry Milk',
      price: 20,
      image: '../../assets/future/blueberi.jpg'
    }
    let prod2: Iproduct = {
      id: 2,
      name: 'T-Shirt Girl Logo',
      price: 80,
      image: '../../assets/future/kaos.jpg'
      
    }
    let prod3: Iproduct = {
      id: 3,
      name: 'Chocolate Cookies',
      price: 15,
      image: '../../assets/future/kuki.jpg'
      
    }
    let prod4: Iproduct = {
      id: 4,
      name: 'Strawberry Milk',
      price: 20,
      image: '../../assets/future/susuu.jpg'
      
    }

    product.push(prod1, prod2, prod3, prod4);
    return product;
  }

  getBestSeller(){
    let product = [];
    
    let prod1: Iproduct = {
      id: 1,
      name: 'Strawberry Milk',
      price: 20,
      image: '../../assets/future/susuu.jpg'
    }
    let prod2: Iproduct = {
      id: 2,
      name: 'Banana Milk',
      price: 20,
      image: '../../assets/future/pisang.jpg'
      
    }
    let prod3: Iproduct = {
      id: 3,
      name: 'Date Milk',
      price: 20,
      image: '../../assets/future/kurmak.jpg'
    }
    let prod4: Iproduct = {
      id: 4,
      name: 'Blueberry Milk',
      price: 20,
      image: '../../assets/future/blueberi.jpg'
      
    }

    product.push(prod1, prod2, prod3, prod4);
    return product;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(){}
  ngOnInit(): void {
    
  }
  products=[
    {id:1,name:'Minimalists Analog Watch',price:'109',color:'Black',
    available:'Available',image:'/assets/2.jpeg'},
    {id:2,name:'Minimalists Analog Watch',price:'1099',color:'Red',
    available:'Not Available',image:'/assets/2.webp'},
    {id:3,name:'Minimalists Analog Watch',price:'239',color:'White',
    available:'Available',image:'assets/3.webp'},
    {id:4,name:'Minimalists Analog Watch',price:'509',color:'Green',
    available:'Available',image:'/assets/4.webp'},
    {id:5,name:'Minimalists Analog Watch',price:'609',color:'Black',
    available:'Not Available',image:'/assets/5.webp'},
  ];

}

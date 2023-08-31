import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

  courses=[
    {id:101,name:"Javascript",author:'John Heikela',duration:81,type:'free',
    price:0.00,rating:3.5,image:'/assets/2.webp',description:'In this course you will learn the fundamentales of javascript.'

    },
    {
      id:102,name:"c++",author:'John ',duration:4,type:'free',
    price:0.00,rating:5.5,image:'/assets/3.webp',description:'In this course you will learn the fundamentales of javascript.'

    },
    {
      id:103,name:"Java",author:'bala',duration:98,type:'premium',
    price:0.00,rating:8.5,image:'/assets/4.webp',description:'In this course you will learn the fundamentales of javascript.'

    }
  ]

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  dropDown:Array<any>=[{
  	id:1,
  	text:"Option one"
  },
  {
  	id:2,
  	text:"Option two"
  },
  {
  	id:3,
  	text:"Option three"
  }];

  years:Array<Number>=[2012,2015,2018];
  students=[{
  	name:"Srijan",
  	results:[100,90,80,70]
  },
  {
  	name:"Paul",
  	results:[50,60,70,80]
  },
  {
  	name:"Bob",
  	results:[30,80,10,90]
  },
  ];

  fdate:Date=new Date(1998, 2, 24);

  itemWasClicked(event){
  	console.log(event)
  }

  buttonWasClicked(){
  	console.log("Button was clicked")
  }

  chartItemClicked(event){
  	console.log(event)
  }

  logValue(date:Date){
  	console.log(date);
  }

  onBlur(){
  	console.log("Blur");
  }
  
  onFocus(){
  	console.log("Focus");
  }
}

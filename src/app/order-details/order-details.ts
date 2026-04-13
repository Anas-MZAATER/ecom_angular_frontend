import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {DecimalPipe, JsonPipe} from '@angular/common';

@Component({
  selector: 'app-order-details',
  imports: [
    JsonPipe,
    HttpClientModule,
    DecimalPipe
  ],
  templateUrl: './order-details.html',
  styleUrl: './order-details.css',
})
export class OrderDetails {
  orderDetails:any;
  orderId!:number;
  constructor(private http: HttpClient, private router: Router, route: ActivatedRoute) {
    this.orderId=route.snapshot.params['orderId'];
  }
  ngOnInit(): void {
    this.http.get("http://localhost:8888/order-service/fullOrder/"+this.orderId).subscribe({
      next:(data)=>{
        //console.log(data);
        this.orderDetails=data;
      },
      error:(err)=>{
        console.error("error:"+ err);
      }
    })
  }
}

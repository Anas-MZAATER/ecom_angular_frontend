import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-orders',
  imports: [HttpClientModule],
  templateUrl: './orders.html',
  styleUrl: './orders.css',
})
export class Orders {
    orders:any;
    customerId!:number;
  constructor(private http: HttpClient, private router: Router, route: ActivatedRoute) {
    this.customerId=route.snapshot.params['customerId'];
  }
  ngOnInit(): void {
    this.http.get("http://localhost:8888/order-service/orders/search/byCustomerId?projection=fullOrder&customerId="+this.customerId).subscribe({
      next:(data)=>{
        //console.log(data);
        this.orders=data;
      },
      error:(err)=>{
        console.error("error:"+ err);
      }
    })
  }

  getOrderDetails(o: any) {

  }
}

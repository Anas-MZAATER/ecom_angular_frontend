import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customers',
  imports: [HttpClientModule],
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class Customers implements OnInit{

  customers:any;
  constructor(private http: HttpClient, private router: Router) {
  }
  ngOnInit(): void {
    this.http.get("http://localhost:8888/customer-service/customers?projection=fullCustomer").subscribe({
      next:(data)=>{
        //console.log(data);
        this.customers=data;
      },
      error:(err)=>{
        console.error("error:"+ err);
      }
    })
  }

  getOrders(c: any) {
    this.router.navigateByUrl("/orders/"+c.id);
  }
}

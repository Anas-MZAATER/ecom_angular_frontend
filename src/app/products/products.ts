import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-products',
  imports: [HttpClientModule],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {

  products:any;
  constructor(private http: HttpClient) {
  }
  ngOnInit(): void {
    this.http.get("http://localhost:8888/inventory-service/products?projection=fullProduct").subscribe({
      next:(data)=>{
        this.products=data;
      },
      error:(err)=>{
        console.error("error:"+ err);
      }
    })
  }

}

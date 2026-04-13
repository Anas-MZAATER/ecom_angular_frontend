import { Routes } from '@angular/router';
import {Products} from './products/products';
import {Customers} from './customers/customers';
import {Orders} from './orders/orders';
import {OrderDetails} from './order-details/order-details';

export const routes: Routes = [
  {path : "products", component : Products},
  {path : "customers", component : Customers},
  {path : "orders/:customerId", component : Orders},
  {path : "order-details/:orderId", component : OrderDetails}
];
